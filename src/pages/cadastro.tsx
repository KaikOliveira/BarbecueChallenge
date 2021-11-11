import React from 'react';
import { FiLock, FiUser } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import type { NextPage } from 'next';

import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { Container } from '~/styles/pages/signUp';

const signUp: NextPage = () => {
  const formRef = React.useRef<FormHandles>(null);

  function handleSignUp() {
    console.log('adfs');
  }
  return (
    <Container>
      <Header small={false} title={true} />

      <Form ref={formRef} onSubmit={handleSignUp}>
        <h1>Cadastro</h1>

        <span>Nome</span>
        <Input type="text" name="name" placeholder="Nome" icon={FiUser} />

        <span className="last">Usuário</span>
        <Input type="text" name="user" placeholder="Usuário" icon={FiUser} />

        <span className="last">Senha</span>
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          icon={FiLock}
        />
      </Form>
    </Container>
  );
};

export default signUp;
