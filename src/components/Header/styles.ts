import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 32.4rem;
  background-color: var(--primary);
  background-image: url('/backgroundHeader.svg');
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  &.small {
    height: 20rem;
  }

  h1 {
    font-size: 3.2rem;
    color: var(--white);
    font-weight: 800;
  }
`;
