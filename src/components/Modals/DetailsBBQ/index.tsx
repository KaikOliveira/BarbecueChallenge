import React from 'react';
import { toast } from 'react-toastify';

import { parseCookies } from 'nookies';

import { CustomToast } from '~/components/CustomToast';
import { useModals } from '~/hooks/contexts/useModals';
import { api } from '~/services/api';

import { ButtonClose } from '../ButtonClose';
import { DragBar } from '../DragBar/incdex';
import { CustomSheetStyled, Container } from './styles';

interface IDataBBQ {
  id: string;
  title: string;
  date: string;
  amountPeople: number;
  participants: any[];
}

export const DetailsBBQ: React.FC = () => {
  const cookies = parseCookies();
  const { detailsBBQ, idShowSchedule, onCloseDetailsBQQ } = useModals();

  const [data, setData] = React.useState<IDataBBQ>();

  React.useEffect(() => {
    if (idShowSchedule !== '') {
      getDataBBQ();
    }
  }, [idShowSchedule]);

  async function getDataBBQ() {
    try {
      const headers = {
        Authorization: `Bearer ${cookies['@Barbecue:token']}`,
      };

      const { data: details } = await api.get(
        `schedules/show/${idShowSchedule}`,
        {
          headers,
        }
      );

      setData(details);
    } catch (err) {
      console.log(err);
      onCloseDetailsBQQ();
      toast(
        <CustomToast
          status="error"
          title="Error!"
          message="Ao carregar os dados dessa agenda!"
        />,
        {
          icon: false,
          autoClose: 5000,
        }
      );
    }
  }

  return (
    <CustomSheetStyled
      isOpen={detailsBBQ}
      onClose={onCloseDetailsBQQ}
      disableDrag
    >
      <CustomSheetStyled.Container>
        <CustomSheetStyled.Header>
          <DragBar />
          <ButtonClose type="button" onClick={() => onCloseDetailsBQQ()} />
        </CustomSheetStyled.Header>
        <CustomSheetStyled.Content>
          <Container>
            <h1>fdsafdas</h1>
          </Container>
        </CustomSheetStyled.Content>
      </CustomSheetStyled.Container>

      <CustomSheetStyled.Backdrop onTap={() => onCloseDetailsBQQ()} />
    </CustomSheetStyled>
  );
};
