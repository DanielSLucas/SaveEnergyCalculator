import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: fit-content;
  min-height: 2.5rem;
  width: 100%;
  background: #00A88F;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Roboto;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 0.5rem;

  transition: background-color 0.2s, box-shadow 0.2s;
  
  &:hover {
    background: ${shade(0.2, '#00A88F')};
  }

  &:active {
    box-shadow: none;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      margin-left: 0.5rem;
    }
  }
`;
