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
  margin-bottom: 3rem;
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

  section {
    h1 {
      font-family: Roboto Condensed;
      font-weight: bold;
      font-size: 3rem;
      color: #006959;
      margin-bottom: 1rem;
    }

    & > div {
      width: 46rem;
      
      background: #FAFAFC;
      padding: 1rem 2rem;

      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;  

      h2 {
        margin-bottom: 0.5rem;
        font: 400 1.5rem Roboto;
        color: #006959;
      }

      hr {
        width: 100%;
        height: 1px;
        background: #D3D3D3;
        margin-bottom: 1.5rem;
      }

      table, tr, td, th {
        border: 1px solid #d3d3d3;
        border-collapse: collapse;
      }

      table {
        width: 100%;
        text-align: center;
        margin-top: 2rem;

        thead th {
          font-size: 1.5rem;
          font-weight: 500;
          color: #006959;
        }

        tbody tr td{                              
          font-size: 1.125rem;  
          padding: 0.5rem 0;                    
        }

      }
    }
  }

  footer {
    margin-top: 0.5rem;
    text-align: center;
    span {
      color: #B6B6B6;
      font-size: 1rem;
    }

    ul {
      list-style: none;

      li {
        font-size: 1.5rem;
        margin: 0.5rem 0;
        strong {
          color: #006959;
        }
      }

      div:first-child {
        display: flex;
        justify-content: space-between;
      }
      
      div:last-child {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media(max-width: 700px) {
    section {
      width: 90%;   
      & > div {
        width: 100%;
        padding: 1rem 1rem;
      }
    }
  } 

  @media(max-width: 425px) {
    footer {
      div {
        flex-direction: column;
      }
    }
  }
`;

export const ChartContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;