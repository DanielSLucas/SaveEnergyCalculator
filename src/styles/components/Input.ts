import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isCheckBox: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;

  div {
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    color: #00A88F;
    margin-left: 0.5rem;
    align-self: flex-start;
  }

  input {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    background: #FCFCFC;
    border: 1px solid #d3d3d3;
    outline: 0;
    padding: 0 0.5rem;
    font: 1rem 400 Roboto;
    color: #454343;
  }

  span {
    display: none;
  }

  ${(props) =>
    props.isCheckBox &&
    css`
      width: auto !important;
      flex-direction: row-reverse;
      margin-bottom: 0;
      div {
        align-self: center;
      }
      input {
        height: auto;
        width: auto;
        padding: 0;
      }
      &::after {
        display: none !important;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      &::after {
        margin-top: -2px;
        content: '';
        height: 2px;
        width: 85%;
        background: #00A88F;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      input {
        background: #f4f6ff;
      }
    `}
`;
