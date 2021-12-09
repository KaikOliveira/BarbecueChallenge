import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { GiBarbecue } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { toast } from 'react-toastify';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { CustomToast } from '~/components/CustomToast';
import { Input } from '~/components/Input';
import { useModals } from '~/hooks/contexts/useModals';

import { ButtonClose } from '../ButtonClose';
import { DragBar } from '../DragBar/incdex';
import { CustomSheetStyled, Container } from './styles';

export const NewBBQ: React.FC = () => {
  const { createBBQ, showCreateBBQ } = useModals();

  const formRef = React.useRef<FormHandles>(null);

  function handleCreateBBQ() {
    toast(
      <CustomToast
        status="success"
        title="Parabens!"
        message="Churrasco criado com sucesso!"
      />,
      {
        icon: false,
        autoClose: 5000,
      }
    );

    showCreateBBQ();
  }

  return (
    <CustomSheetStyled isOpen={createBBQ} onClose={showCreateBBQ} disableDrag>
      <CustomSheetStyled.Container>
        <CustomSheetStyled.Header>
          <DragBar />
          <ButtonClose type="button" onClick={() => showCreateBBQ()} />
        </CustomSheetStyled.Header>
        <CustomSheetStyled.Content>
          <Container>
            <h1>Novo Churrasco</h1>
            <Form ref={formRef} onSubmit={handleCreateBBQ}>
              <Input
                name="churrasco"
                placeholder="Nome do churrasco"
                icon={GiBarbecue}
              />

              <Input
                name="data"
                placeholder="Data do churrasco"
                icon={BsCalendarDate}
                type="date"
              />

              <Input
                name="priceTotal"
                placeholder="Valor a ser recadado"
                icon={MdAttachMoney}
                type="number"
              />

              <button type="submit">Salvar</button>
            </Form>
          </Container>
        </CustomSheetStyled.Content>
      </CustomSheetStyled.Container>

      <CustomSheetStyled.Backdrop onTap={() => showCreateBBQ()} />
    </CustomSheetStyled>
  );
};
