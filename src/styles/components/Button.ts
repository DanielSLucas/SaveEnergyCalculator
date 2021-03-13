import styled from 'styled-components';

export const Container = styled.button`
  height: 2.5rem;
  width: 100%;
  background: #00A88F;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 5vw;
  font-weight: bold;
  font-family: Roboto;

  border: none;
  border-radius: 0.5rem;

  svg {
    margin-right: 1rem;
  }

  @media(min-width: 425px) {
    font-size: 4vw;
  }

  @media(min-width: 768px) {
    height: 3rem;
  }

  @media(min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
