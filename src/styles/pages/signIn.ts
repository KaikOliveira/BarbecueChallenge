import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--yellow);
  max-width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    position: absolute;
    top: 26rem;
    display: flex;
    flex-direction: column;
    width: 30rem;

    input {
      width: 100%;
      height: 5rem;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
      border-radius: 0.25rem;
      margin-bottom: 3rem;
      border: 0 none;
      padding-left: 1rem;
      font-size: 1.8rem;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 500;

      &::placeholder {
        color: rgba(0, 0, 0, 0.8);
        font-weight: 400;
        font-style: italic;
        font-size: 1.8rem;
      }
    }

    span {
      font-size: 2.1rem;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 700;
      margin-bottom: 1.6rem;
    }

    button {
      width: 100%;
      height: 5rem;
      background: var(--black);
      border-radius: 1.8rem;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
      color: var(--white);
      border: 0 none;
      font-size: 1.8rem;
      font-weight: 700;
      transition: all 0.3s ease-in;
      margin-top: 1.6rem;

      &:hover {
        background: rgba(0, 0, 0, 0.85);
      }
    }
  }
`;
