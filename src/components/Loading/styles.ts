import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;

  svg {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(-360deg);
    }
  }
`;
