import React from 'react';
import Sheet from 'react-modal-sheet';

import styled from 'styled-components';

import { useModals } from '~/hooks/useModals';

import { Container } from './styles';

const CustomSheetStyled = styled(Sheet)`
  display: flex;
  align-items: center;
  justify-content: center;
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
    border: 0 !important;
  }
  .react-modal-sheet-container {
    width: 50rem !important;
    height: auto !important;
    position: relative !important;
    padding: 3rem;
    border-radius: 1.3rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 993px) {
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

export const NewBBQ: React.FC = () => {
  const { createBBQ, showCreateBBQ } = useModals();

  return (
    <CustomSheetStyled isOpen={createBBQ} onClose={showCreateBBQ} disableDrag>
      <CustomSheetStyled.Container>
        <CustomSheetStyled.Header>{/* <DragBar /> */}</CustomSheetStyled.Header>
        <CustomSheetStyled.Content>
          <Container>
            <h1>test</h1>
          </Container>
        </CustomSheetStyled.Content>
      </CustomSheetStyled.Container>

      <CustomSheetStyled.Backdrop onClick={() => showCreateBBQ()} />
    </CustomSheetStyled>
  );
};
