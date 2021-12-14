import React from 'react';

import { BBQ, Money, People } from '~/assets/icons';
import { Header } from '~/components/Header';
import { useModals } from '~/hooks/contexts/useModals';
import { getAllSchedule, useSchedule } from '~/hooks/querys/useSchedules';
import { ISchedules } from '~/interfaces/schedule';
import { Container, AddNewBarbecue } from '~/styles/pages/schedule';
import { withSSRAuth } from '~/utils/withSSRAuth';

const agendas = ({ arrSchedules }) => {
  const { showCreateBBQ, showDetailsBBQ } = useModals();
  const { data } = useSchedule({ initialData: arrSchedules });

  return (
    <Container>
      <Header small={true} title={true} />

      <section>
        {data?.map((item: ISchedules) => (
          <div key={item.id} onClick={() => showDetailsBBQ()}>
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

        <AddNewBarbecue onClick={() => showCreateBBQ()}>
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
