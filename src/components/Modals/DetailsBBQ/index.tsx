import React from 'react';
import { toast } from 'react-toastify';

import { CustomToast } from '~/components/CustomToast';
import { Loading } from '~/components/Loading';
import { useModals } from '~/hooks/contexts/useModals';
import { api } from '~/services/client';

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
  const { detailsBBQ, idShowSchedule, onCloseDetailsBQQ } = useModals();

  const [data, setData] = React.useState<IDataBBQ | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (idShowSchedule !== '') {
      getDataBBQ();
    }
  }, [idShowSchedule]);

  async function getDataBBQ() {
    try {
      setIsLoading(true);

      const { data: details } = await api.get(
        `schedules/show/${idShowSchedule}`
      );

      setData(details);
    } catch (err) {
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
    } finally {
      setIsLoading(false);
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
            {isLoading ? <Loading /> : <h1>{data?.title}</h1>}
          </Container>
        </CustomSheetStyled.Content>
      </CustomSheetStyled.Container>

      <CustomSheetStyled.Backdrop onTap={() => onCloseDetailsBQQ()} />
    </CustomSheetStyled>
  );
};
