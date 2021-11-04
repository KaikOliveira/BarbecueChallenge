import Sheet from 'react-modal-sheet';

import styled from 'styled-components';

export const CustomSheetStyled = styled(Sheet)`
  display: flex;
  align-items: center;
  justify-content: center;
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
    border: 0 !important;
  }
  .react-modal-sheet-container {
    width: 45rem !important;
    height: auto !important;
    position: relative !important;
    padding: 4rem;
    border-radius: 1.3rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f7fc;

    @media (max-width: 883px) {
      border-radius: 3.4rem 3.4rem 0px 0px !important;
      align-self: flex-end;
      width: 100% !important;
      padding: 3rem 0.5rem 1rem 0.5rem !important;
    }
  }
  .react-modal-sheet-content {
    padding: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.2rem;
    color: var(--title);
    font-weight: 700;
    letter-spacing: 0.075rem;
    align-self: center;
  }

  form {
    width: 80%;
    padding: 1rem;
    margin-top: 1.3rem;

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
