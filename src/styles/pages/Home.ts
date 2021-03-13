import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ContentWrapper = styled.main`
  position: absolute;
  top: 5.5rem;  
  
  width: 100%;
`;

export const Content = styled.div`  
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Intro = styled.section`
  width: 100%;
  position: relative;

  display: flex;
  align-content: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  div > div {
    position: absolute;
    bottom: 20%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    h1 {
      font-family: Roboto Condensed;
      font-size: 5vw;
      color: #006959;
    }

    p {
      font-size: 2vw;
      text-align: center;
    }
  }

  @media (min-width: 1120px) {
    div > div {

      h1 {
        font-size: 3vw;
      }

      p {
        font-size: 1.1vw;
      }
    }
  }  
`;