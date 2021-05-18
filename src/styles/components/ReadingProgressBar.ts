import styled from 'styled-components';

interface ContainerProps {
  readingProgress: number;
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  height: 0.25rem;
  width: ${(props) => `${props.readingProgress}%`};
  top: 5.5rem;
  background: linear-gradient(168.03deg, #FDC54F -13.53%, #F79B3D 140.14%);
`;