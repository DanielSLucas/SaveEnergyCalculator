import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isCheckBox: boolean;
  centered?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

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

  & > button {
    border: 0;
    background: 0;

    position: absolute;
    right: 0.5rem;
    top: 2rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #00A88F;
    }
  }

  ${(props) => 
    props.centered && 
    css`
      input {
        text-align:center;
      }
    `}

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

export const DropdownContainer = styled.div`
  position: absolute;
  bottom: -6.5rem;
  z-index: 2000;

  background: #FCFCFC;
  padding: 0.5rem;

  border: 1px solid #d3d3d3;

  height: 7rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;    
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 0.25rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.1,"#888")}; 
  }

  ul {
    width: 100%;
    list-style: none;

    li {
      margin-bottom: 0.5rem;
      font-size: 1.125rem;
      text-align: center;
      border-bottom: 1px solid #d3d3d3;

      button {
        width: 100%;
        border: 0;
        background: 0;

        &:hover {
          background: #f3f3f3;
          border-radius: 0.5rem;
        }
      }
    }

    
  }
`;