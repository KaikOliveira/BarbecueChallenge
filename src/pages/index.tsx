import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiUser, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { CustomToast } from '~/components/CustomToast';
import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { signInSchema } from '~/shared/validators/index';
import * as Styled from '~/styles/pages/signIn';
import { getValidationErrors } from '~/utils/getValidationErrors';

type Form = {
  login: string;
  password: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  const formRef = React.useRef<FormHandles>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = async (values: Form) => {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      await signInSchema.validate(values, {
        abortEarly: false,
      });

      toast(
        <CustomToast
          status="success"
          title="Parabens!"
          message="Autenticação realizado com sucesso!"
        />,
        {
          icon: false,
          autoClose: 5000,
        }
      );
      setLoading(false);
      router.push('/agenda');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        setLoading(false);

        return;
      }

      toast(
        <CustomToast
          status="error"
          title="Erro na autenticação!"
          message="Ocorreu um erro ao fazer login, cheque as credenciaais."
        />,
        {
          icon: false,
          autoClose: 5000,
        }
      );
      setLoading(false);
    }
  };

  return (
    <Styled.Wrapper>
      <Header small={false} title={false} />

      <Form ref={formRef} onSubmit={handleSignIn}>
        <h1>Agenda Churrasco</h1>

        <span>Usuário</span>
        <Input type="text" name="login" placeholder="Usuário" icon={FiUser} />

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
