import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.main`
  height: 100%;  
  width: 100%;  
  max-width: 1120px;
  margin: 0 auto; 
`;


export const Header = styled.header` 
  margin-right: auto;
  margin-left: 0.5rem;
  margin-top: 6.5rem;

  button {
    border: 0;
    background: 0;
  }

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: #006959;
  }  
`;

export const MainSection = styled.div`
  width: 100%;
  
  display: flex;
  align-content: center;
  justify-content: center;

  margin-bottom: 2rem;

  section {
    width: 90%;
    h1 {
      font-family: Roboto Condensed;
      font-weight: bold;
      font-size: 3rem;
      color: #006959;
      margin-bottom: 1rem;
    }
    
    h2 {
      margin: 1rem 0;
      color: #006959;
    }

    ul {
      list-style: none;
    }

    ul li {
      p a {
        text-decoration: underline;
      }
    }

    ul:last-child {
      list-style: disc;
      li {
        margin-left: 3rem;
        p {
          text-indent: 0;
        }
      }
    }

    img {
      width: 100%;
      height: auto;
    }

    p {
      font-size: 1.5rem;
      margin-top: 1rem;
      text-align: justify;
      text-indent: 3rem;
      color: #9a9a9a;
    }
  }

  @media(min-width: 700px) {
    section {
      width: 70%;   
    }
  } 
`;
