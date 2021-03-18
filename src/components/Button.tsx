import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from '../styles/components/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...rest }) => {
  return (
    <Container {...rest}>      
      <div>
        {children}
        {Icon && <Icon size={16} />}
      </div>
    </Container>
  );
};

export default Button;
