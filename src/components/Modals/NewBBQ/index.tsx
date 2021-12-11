import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { GiBarbecue } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { toast } from 'react-toastify';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { parseCookies } from 'nookies';
import * as Yup from 'yup';

import { CustomToast } from '~/components/CustomToast';
import { Input } from '~/components/Input';
import { useModals } from '~/hooks/contexts/useModals';
import { useSchedule } from '~/hooks/querys/useSchedules';
import { api } from '~/services/api';
import { createSchedule } from '~/shared/validators/scheduleSchema';
import { getValidationErrors } from '~/utils/getValidationErrors';

import { ButtonClose } from '../ButtonClose';
import { DragBar } from '../DragBar/incdex';
import { CustomSheetStyled, Container } from './styles';

interface IFormCreateBBQ {
  churrasco: string;
  data: string;
  priceTotal?: string;
}

export const NewBBQ: React.FC = () => {
  const cookies = parseCookies();
  const { createBBQ, showCreateBBQ } = useModals();
  const { refetch } = useSchedule();

  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<FormHandles>(null);

  async function handleCreateBBQ(values: IFormCreateBBQ) {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      await createSchedule.validate(values, {
        abortEarly: false,
      });

      const data = {
        title: values.churrasco,
        date: '01/20',
        priceTotal: values.priceTotal,
      };

      const headers = {
        Authorization: `Bearer ${cookies['@Barbecue:token']}`,
      };

      await api.post('schedules/create', data, { headers });
      refetch();

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
      setLoading(false);
      showCreateBBQ();
    } catch (err) {
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        setLoading(false);

        return;
      }

      toast(
        <CustomToast
          status="error"
          title="Error!"
          message="Error ao criar um churrasco!"
        />,
        {
          icon: false,
          autoClose: 5000,
        }
      );
      setLoading(false);
    }
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

              <button type="submit">
                {loading ? <AiOutlineLoading3Quarters size={20} /> : 'Salvar'}
              </button>
            </Form>
          </Container>
        </CustomSheetStyled.Content>
      </CustomSheetStyled.Container>

      <CustomSheetStyled.Backdrop onTap={() => showCreateBBQ()} />
    </CustomSheetStyled>
  );
};
