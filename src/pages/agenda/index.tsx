import React from 'react';

import type { NextPage } from 'next';

import { BBQ, Money, People } from '~/assets/icons';
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
