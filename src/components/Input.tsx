import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container, DropdownContainer } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  isCheckBox?: boolean;
  centered?: boolean;
  selectOptions?: string[];
  setValue?(string): void;
}

const Input: React.FC<InputProps> = ({
  label, name, isCheckBox, selectOptions, setValue, centered, ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isShowingOptins, setIsShowingOptins] = useState(false);
  const [currentlyShowingSelectOptions, setCurrentlyShowingSelectOptions] = useState(selectOptions);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const toggleOptions = useCallback(() => {
    setIsShowingOptins(!isShowingOptins);
  }, [isShowingOptins]);

  const handleOptionSelected = useCallback((optionValue: string) => {
    setValue(optionValue);
    setIsShowingOptins(false);
  }, []);

  useEffect(() => {
    if (inputRef.current.value === '' || !inputRef.current.value) {
      return setCurrentlyShowingSelectOptions(selectOptions);
    } else {

      const filteredOptions = selectOptions
        .filter(option => option.toLowerCase().indexOf(inputRef.current.value.toLowerCase()) > -1);

      return setCurrentlyShowingSelectOptions(filteredOptions);
    }
  }, [inputRef.current?.value]);

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      isCheckBox={isCheckBox}
      centered={centered}
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

      {selectOptions && (
        <button type="button" onClick={toggleOptions}>
          <FiChevronDown />
        </button>
      )}

      {isShowingOptins && (
        <DropdownContainer>
          <ul>
            {currentlyShowingSelectOptions.map((option, index) => (
              <li key={index}>
                <button type="button" onClick={() => handleOptionSelected(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </DropdownContainer>
      )}
    </Container>
  );
};

export default Input;
