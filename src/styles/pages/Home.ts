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

  article {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    height: 40vh;
    width: 100%;
    background: url('images/lamp.svg') no-repeat center;
    background-size: cover;

    h1 {
      margin-top: 40%;
      font-family: Roboto Condensed;
      font-size: 10vw;
      color: #006959;
      text-align: center;
    }

    p {
      font-size: 4vw;
      text-align: center;
    }
  }

  @media (min-width: 425px) {
    article {

      h1 {
        margin-top: 30%;
        font-size: 8vw;
      }

      p {
        font-size: 3vw;
      }
    }
  } 

  @media (min-width: 580px) {
    article {

      h1 {
        margin-top: 30%;
        font-size: 7vw;
      }

      p {
        font-size: 2.5vw;
      }
    }
  } 

  @media (min-width: 768px) {
    article {

      h1 {
        margin-top: 15%;
        font-size: 5vw;
      }

      p {
        font-size: 2vw;
      }
    }
  } 

  @media (min-width: 1120px) {
    article {

      h1 {
        font-size: 3vw;
      }

      p {
        font-size: 1.1vw;
      }
    }
  } 

  @media (max-height: 500px) {
    article {
      height: 80vh;

      h1 {
        margin-top: 20%;
      }
    }
  } 
`;