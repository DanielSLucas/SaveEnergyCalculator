import styled from 'styled-components';

interface ContainerProps {
  readingProgress: number;
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  height: 0.25rem;
  width: ${(props) => `${props.readingProgress}%`};
  top: 5.5rem;
  background: #005C4E;
`;