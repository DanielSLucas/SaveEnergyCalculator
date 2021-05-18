import { MutableRefObject, useEffect, useState } from "react";

import { Container } from '../styles/components/ReadingProgressBar';

interface ReadingProgressBar {
  containerRef: MutableRefObject<any>;
}

const ReadingProgressBar: React.FC<ReadingProgressBar> = ({ containerRef }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  const scrollListener = () => {
    if (!containerRef.current) {
      return;
    }

    const element         = containerRef.current;
    const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return <Container readingProgress={readingProgress}/>
};

export default ReadingProgressBar;