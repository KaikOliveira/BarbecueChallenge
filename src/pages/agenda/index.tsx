import React from 'react';
import { toast } from 'react-toastify';

import { BBQ, Money, People } from '~/assets/icons';
import { CustomToast } from '~/components/CustomToast';
import { Header } from '~/components/Header';
import { useModals } from '~/hooks/contexts/useModals';
import { getAllSchedule, useSchedule } from '~/hooks/querys/useSchedules';
import { ISchedules } from '~/interfaces/schedule';
import { Container, AddNewBarbecue } from '~/styles/pages/schedule';
import { withSSRAuth } from '~/utils/withSSRAuth';

const agendas = ({ arrSchedules }: any) => {
  const { showCreateBBQ, showDetailsBBQ } = useModals();
  const { data } = useSchedule({ initialData: arrSchedules });

  function handleCreateSchedule() {
    if (data) {
      if (data?.length >= 3) {
        toast(
          <CustomToast
            status="warn"
            title="Atenção!"
            message="Usuário só pode ter 3 agendas."
          />,
          {
            icon: false,
            autoClose: 5000,
          }
        );
        return;
      }
    }
    showDetailsBBQ();
  }

  return (
    <Container>
      <Header small={true} title={true} />

      <section>
        {data?.map((item: ISchedules) => (
          <div key={item.id} onClick={() => showCreateBBQ()}>
            <header>
              <p>{item.date}</p>
              <span>{item.title}</span>
            </header>

            <footer>
              <aside>
                <People />
                <span>{item.amountPeople}</span>
              </aside>

              <aside>
                <Money />
                <span>R${item.priceTotal}</span>
              </aside>
            </footer>
          </div>
        ))}

        <AddNewBarbecue onClick={() => handleCreateSchedule()}>
          <aside>
            <BBQ />
          </aside>
          <span>Adicionar Churras</span>
        </AddNewBarbecue>
      </section>
    </Container>
  );
};

export default agendas;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const data = await getAllSchedule(ctx);
  return {
    props: { arrSchedules: data },
  };
});
