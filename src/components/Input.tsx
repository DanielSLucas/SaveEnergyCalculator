import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Container } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  isCheckBox?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, isCheckBox, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      isCheckBox={isCheckBox}
    >
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        id={name}
        {...rest}
      />
    </Container>
  );
};

export default Input;
