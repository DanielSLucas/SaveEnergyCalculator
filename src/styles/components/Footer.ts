import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 60rem;
  }

  @media (max-width: 1024px) {
    max-width: 50rem;
  }

  @media (max-width: 768px) {
    max-width: 40rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  height: fit-content;
  background: #37B7A4;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  /* @media (max-width: 425px) {
    height: 12rem;
  } */
`;

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin: 2rem 0;

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const List = styled.div`
  margin-right: 2.5rem;

  &:last-child {
    margin-right: 0;
  }

  strong {
    font-weight: bold;
    color: #ffffff;
  }

  ul {
    margin-top: 1rem;
    list-style: none;
  }

  li {
    font-size: 16px;
    font-weight: 400;
    color: #fafafc;

    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  ul li a {
    text-decoration: none;
    color: #fafafc;
  }

  @media (max-width: 425px) {
    margin-right: 1.5rem;

    strong {
      font-size: 14px;
    }

    li {
      font-size: 12px;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 13rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
