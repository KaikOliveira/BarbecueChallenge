import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  section {
    position: absolute;
    top: 16rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 2.4rem;
    grid-row-gap: 2.4rem;
    width: 58.8rem;

    div {
      width: 28rem;
      height: 19.2rem;
      background: var(--white);
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
      border-radius: 0.3rem;
    }
  }
`;

export const AddNewBarbecue = styled.div`
  width: 28rem;
  height: 19.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--gray) !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: #fff !important;
  }

  aside {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    background: var(--yellow);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    color: var(--black);
    margin-top: 0.8rem;
    font-size: 2.1rem;
    font-weight: 700;
  }
`;
