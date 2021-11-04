import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { Wrapper } from '~/styles/pages/signIn';

type Form = {
  login: string;
  password: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  const formRef = React.useRef<FormHandles>(null);

  const handleSignIn = (values: Form) => {
    console.log(values);
    router.push('/agenda');
  };

  return (
    <Wrapper>
      <Header small={false} title={false} />

      <Form ref={formRef} onSubmit={handleSignIn}>
        <h1>Agenda Churrasco</h1>

        <span>Login</span>
        <Input type="text" name="login" placeholder="e-mail" icon={FiMail} />
        <span className="last">Senha</span>
        <Input
          type="password"
          name="password"
          placeholder="senha"
          icon={FiLock}
        />

        <button type="submit">Entrar</button>
      </Form>
    </Wrapper>
  );
};

export default Home;
