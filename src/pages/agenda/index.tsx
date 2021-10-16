import React from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { BBQ, Money, People } from '~/assets/icons';
import { Header } from '~/components/Header';
import { useModals } from '~/hooks/useModals';
import { Container, AddNewBarbecue } from '~/styles/pagesStyles/schedule';

const agendas: NextPage = () => {
  const arr = [
    {
      id: 1,
      name: 'Niver',
      date: '01/12',
      amount: 15,
      price: 280,
    },
    {
      id: 2,
      name: 'Niver Guelviin',
      date: '01/12',
      amount: 15,
      price: 250,
    },
    {
      id: 3,
      name: 'Niver Tigrão',
      date: '01/12',
      amount: 15,
      price: 320,
    },
  ];

  const { showCreateBBQ } = useModals();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header small={true} />

      <section>
        {arr.map((item) => (
          <div key={item.id}>
            <header>
              <p>{item.date}</p>
              <span>{item.name}</span>
            </header>

            <footer>
              <aside>
                <People />
                <span>{item.amount}</span>
              </aside>

              <aside>
                <Money />
                <span>R${item.price}</span>
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
