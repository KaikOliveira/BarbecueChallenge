import Sheet from 'react-modal-sheet';

import styled from 'styled-components';

export const CustomSheetStyled = styled(Sheet)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15 !important;

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
    border: 0 !important;
  }

  .react-modal-sheet-container {
    width: 107rem !important;
    height: 75vh !important;
    min-height: 58rem !important;
    position: relative !important;
    padding: 3rem;
    border-radius: 1.3rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f7fc !important;

    @media (max-width: 993px) {
      border-radius: 3.4rem 3.4rem 0px 0px !important;
      align-self: flex-end;
      width: 100% !important;
      padding: 3rem !important;
      height: 75vh !important;
    }
  }
  .react-modal-sheet-content {
    padding: 0rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  background: #f7f7fc;
`;
