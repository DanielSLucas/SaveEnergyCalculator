import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ContentWrapper = styled.main`
  /* position: absolute;
  top: 5.5rem; */
  margin-top: 5.5rem;

  height: 100%;
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;


export const Header = styled.header` 
  margin-right: auto;
  margin-left: 0.5rem;
  margin-top: 1rem;

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: #006959;
  }  
`;

export const MainSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-content: center;
  justify-content: center;

  section {
    height: 100%;
    h1 {
      font-family: Roboto Condensed;
      font-weight: bold;
      font-size: 3rem;
      color: #006959;
      margin-bottom: 1rem;
    }

    & > div {
      width: 46rem;
      height: 100%;

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
    }
  } 
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  column-gap: 0.5rem;

  span {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    button {
      background: #00A88F;
      border: 0;
      border-radius: 0.5rem;

      width: 5rem;
      height: 3rem;
      margin-bottom: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #FFF;
      }
    }
  }
`;

export const ButtonsGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin: 1rem;
  }
`;