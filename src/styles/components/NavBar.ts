import styled, { keyframes } from 'styled-components'

interface ContainerProps {
  showDropdownMenu: boolean;
}

interface DropdownProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  transition: height 1s;

  width: 100%;
  height: ${props => props.showDropdownMenu ? '17rem' : '5.5rem'};

  background: rgba(0, 168, 143, 0.5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  div {
    width: 100%;
    max-width: 1120px;
  }
`;

export const HorizontalMenu = styled.ul`
  display: none;
  list-style: none;
  flex-direction: row;
  align-items: center;

  li {
    margin-left: 2rem;
    font-size: 1.5rem;
    color: #006959;
  }

  li:first-child {
    margin-left: 0;
  } 
  
  @media(max-width: 1120px) {
    li:first-child {
      margin-left: 1rem;
    } 
  }

  @media(min-width: 426px) {
    display: flex;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;

  padding: 0.5rem;
  
  border: 0;
  border-radius: 0.5rem;

  background-color: rgba(0, 168, 143, 0.5);

  display: none;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #006959;
  }

  @media(max-width: 425px) {
    display: flex;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropdownMenu = styled.div<DropdownProps>`
  margin-top: 3rem;

  animation: ${appear} 4.5s;
  
  ul {
    list-style: none;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-top: 1rem;
      font-size: 2rem;
      color: #006959;
    }
  }
`;

