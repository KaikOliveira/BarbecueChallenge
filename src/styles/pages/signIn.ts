import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  background: var(--background);
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    position: absolute;
    top: 20rem;
    display: flex;
    flex-direction: column;
    width: 39rem;
    padding: 2.5rem 4.5rem;
    background: var(--white);
    border-radius: 1.3rem;
    box-shadow: 0px 0.8rem 1.6rem rgba(17, 17, 17, 0.08);

    h1 {
      margin-bottom: 4.5rem;
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

    button {
      width: 100%;
      height: 5rem;
      background: var(--text);
      border-radius: 0.8rem;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
      color: var(--white);
      border: 0 none;
      font-size: 1.8rem;
      font-weight: 700;
      transition: all 0.3s ease-in;
      margin-top: 2.6rem;

      &:hover {
        background: var(--text-high);
      }
    }
  }
`;
