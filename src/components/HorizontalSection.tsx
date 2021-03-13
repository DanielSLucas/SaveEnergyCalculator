import { Container, Content } from '../styles/components/HorizontalSection';

interface HorizontalSectionProps {
  backgroundColor?: string;
  reverse?: boolean;
}

const HorizontalSection: React.FC<HorizontalSectionProps> = ({ backgroundColor, reverse, children }) => {
  return (
    <Container backgroundColor={backgroundColor} >
      <Content reverse={reverse}>
        { children }
      </Content>
    </Container>
  );  
}

export default HorizontalSection;