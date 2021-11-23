import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiLock, FiUser } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import type { NextPage } from 'next';
import Link from 'next/link';
import * as Yup from 'yup';

import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { useAuth } from '~/hooks/contexts/useAuth';
import { ISignUp } from '~/interfaces/auth';
import { signUpSchema } from '~/shared/validators/authSchema';
import { Container, LinkSignIn } from '~/styles/pages/signUp';
import { getValidationErrors } from '~/utils/getValidationErrors';

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

      setLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        setLoading(false);

        return;
      }
    }

    setLoading(false);
  };

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

        <Link href="/">
          <LinkSignIn>Entrar</LinkSignIn>
        </Link>

        <button type="submit" disabled={loading}>
          {loading ? <AiOutlineLoading3Quarters size={20} /> : 'Finalizar'}
        </button>
      </Form>
    </Container>
  );
};

export default signUp;
