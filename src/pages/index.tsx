import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiUser, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import type { NextPage } from 'next';
import * as Yup from 'yup';

import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { useAuth } from '~/hooks/contexts/useAuth';
import { ISignIn } from '~/interfaces/signIn';
import { signInSchema } from '~/shared/validators/index';
import * as Styled from '~/styles/pages/signIn';
import { getValidationErrors } from '~/utils/getValidationErrors';

const Home: NextPage = () => {
  const formRef = React.useRef<FormHandles>(null);
  const [loading, setLoading] = React.useState(false);

  const { signIn } = useAuth();

  const handleSignIn = async (values: ISignIn) => {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      await signInSchema.validate(values, {
        abortEarly: false,
      });

      await signIn(values);

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
    <Styled.Wrapper>
      <Header small={false} title={false} />

      <Form ref={formRef} onSubmit={handleSignIn}>
        <h1>Agenda Churrasco</h1>

        <span>Usuário</span>
        <Input type="text" name="user" placeholder="Usuário" icon={FiUser} />

        <span className="last">Senha</span>
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Styled.LinkSignUp>Criar nova conta</Styled.LinkSignUp>

        <button type="submit" disabled={loading}>
          {loading ? <AiOutlineLoading3Quarters size={20} /> : 'Entrar'}
        </button>
      </Form>
    </Styled.Wrapper>
  );
};

export default Home;
