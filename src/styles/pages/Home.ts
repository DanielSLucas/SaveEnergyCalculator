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
      margin-top: 20%;
      font-family: Roboto Condensed;
      font-size: 3rem;
      color: #006959;
      text-align: center;
    }

    p {
      font-size: 1.125rem;
      text-align: center;
    }
  }

  @media(min-width: 375px) and (max-width: 600px) {
    article{
      h1 {
        font-size: 2.5rem;   
      }
      p {
        font-size: 1rem
      }
    }
  }

  @media(min-width: 850px) {
    article {
      h1 {
        margin-top: 15%;
      }
    }
  }

  @media(min-width: 1024px) {
    article {
      h1 {
        font-size: 3.5rem; 
      }

      p {
        font-size: 1.125rem
      }
    }
  }
`;