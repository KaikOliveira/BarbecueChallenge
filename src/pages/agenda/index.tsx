import React from 'react';

import type { NextPage } from 'next';

import { BBQ } from '~/assets/icons';
import { Header } from '~/components/Header';
import { Container, AddNewBarbecue } from '~/styles/pages/schedule';

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
              <span>{item.amount}</span>
              <span>{item.price}</span>
            </footer>
          </div>
        ))}

        <AddNewBarbecue>
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
