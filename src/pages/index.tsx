import { useForm } from 'react-hook-form';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Header } from '~/components/Header';
import { Wrapper } from '~/styles/pages/signIn';

type Form = {
  login: string;
  password: string;
};

export default function Home() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const handleSignIn = (values: Form) => {
    console.log(values);
    router.push('/agenda');
  };

  return (
    <Wrapper>
      <Header small={false} />

      <form onSubmit={handleSubmit(handleSignIn)}>
        <span>Login</span>
        <input type="text" placeholder="e-mail" {...register('login')} />
        <span>Senha</span>
        <input type="text" placeholder="senha" {...register('password')} />

        <button type="submit">Entrar</button>
      </form>
    </Wrapper>
  );
}
