import styled from 'styled-components';

export const Container = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background: transparent;
  border: none;
  transition: all 0.3s ease-in;

  @media (max-width: 993px) {
    display: none;
  }

  &:hover {
    color: var(--gray-high);
  }
`;
