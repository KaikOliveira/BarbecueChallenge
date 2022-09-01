import { Button as BaseButton } from 'button-ripple-react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  background: var(--background);
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    position: absolute;
    top: 24rem;
    display: flex;
    flex-direction: column;
    width: 39rem;
    padding: 2.5rem 4.5rem;
    background: var(--white);
    border-radius: 1.3rem;
    box-shadow: 0px 0.8rem 1.6rem rgba(17, 17, 17, 0.08);

    h1 {
      margin-bottom: 1rem;
      font-size: 3.2rem;
      color: var(--title);
      font-weight: 700;
      letter-spacing: 0.075rem;
      align-self: center;
    }

    span {
      font-size: 1.6rem;
      color: var(--text);
      font-weight: 600;
      margin-bottom: 1rem;

      &.last {
        margin-top: 2rem;
      }
    }
  }
`;

export const LinkSignIn = styled.p`
  align-self: center;
  margin-top: 1.6rem;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--gray-high);
  cursor: pointer;
  transition: all 0.3s ease-in;
  user-select: none;

  &:hover {
    text-decoration: underline;
    color: var(--primary-high);
  }
`;

export const Button = styled(BaseButton)`
  width: 100%;
  height: 5rem;
  margin-top: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  p {
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
