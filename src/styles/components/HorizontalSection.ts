import styled, { css } from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
}

interface ContentProps {
  reverse?: boolean;
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  ${ props => 
    props.backgroundColor && 
    css`
      background-color: ${props.backgroundColor};
    `
  }
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem;

  img {
    width: 100%;
    height: auto;
  }
  
  article {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
      font-family: Roboto Condensed;
      font-size: 8vw;
      color: #006959;
      margin-bottom: 1.5rem;
    }

    p {
      font-family: Roboto;
      font-size: 5vw;
      text-align: justify;
    }    

    span {
      margin-top: 1rem;
      width: 30%;
    }
  }  

  @media(min-width: 1024px) {
    article {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: ${props => !props.reverse ? 'column-reverse' : 'column'};
  align-content: center;
  justify-content: center;

  div:first-child {
    width: 100%;
    margin-right: 2.5rem;
  }

  div:last-child {
    width: 100%;
  }

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;