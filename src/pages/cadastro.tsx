import React from 'react';
import { FiLock, FiUser } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import * as Yup from 'yup';

import { Input } from '~/components/common/Input';
import { Header } from '~/components/Header';
import { useAuth } from '~/hooks/contexts/useAuth';
import { signUpSchema } from '~/shared/validators/authSchema';
import * as Styled from '~/styles/pages/signUp';
import { ISignUp } from '~/types/auth';
import { getValidationErrors } from '~/utils/getValidationErrors';
import { withSSRGuest } from '~/utils/security/withSSRGuest';

const signUp: NextPage = () => {
  const formRef = React.useRef<FormHandles>(null);

  const [loading, setLoading] = React.useState(false);

  const { signUp } = useAuth();

  const handleSignUp = async (values: ISignUp) => {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      await signUpSchema.validate(values, {
        abortEarly: false,
      });

      await signUp(values);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled.Container>
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

        <Link href="/">
          <Styled.LinkSignIn>Entrar</Styled.LinkSignIn>
        </Link>

        <Styled.Button
          type="submit"
          isLoading={loading}
          backgroundColor="#383B42"
        >
          <p>Finalizar</p>
        </Styled.Button>
      </Form>
    </Styled.Container>
  );
};

export default signUp;

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
