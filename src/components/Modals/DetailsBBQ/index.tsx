import React from 'react';

import { useModals } from '~/hooks/useModals';

import { ButtonClose } from '../ButtonClose';
import { DragBar } from '../DragBar/incdex';
import { CustomSheetStyled, Container } from './styles';

export const DetailsBBQ: React.FC = () => {
  const { detailsBBQ, showDetailsBBQ } = useModals();

  return (
    <CustomSheetStyled isOpen={detailsBBQ} onClose={showDetailsBBQ} disableDrag>
      <CustomSheetStyled.Container>
        <CustomSheetStyled.Header>
          <DragBar />
          <ButtonClose type="button" onClick={() => showDetailsBBQ()} />
        </CustomSheetStyled.Header>
        <CustomSheetStyled.Content>
          <Container>
            <h1>fdsafdas</h1>
          </Container>
        </CustomSheetStyled.Content>
      </CustomSheetStyled.Container>

      <CustomSheetStyled.Backdrop onTap={() => showDetailsBBQ()} />
    </CustomSheetStyled>
  );
};
