import React from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import { CustomToast } from '~/components/CustomToast';
import { ISignIn } from '~/interfaces/signIn';
import { api } from '~/services/api';

interface AuthContextData {
  signIn(credentials: ISignIn): Promise<void>;
}

export const AuthContext = React.createContext({} as AuthContextData);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IRspSessions {
  data: {
    id: number;
    user: string;
    token: string;
  };
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  async function signIn(info: ISignIn) {
    try {
      const { data }: IRspSessions = await api.post('sessions', info);

      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      setCookie(undefined, '@Barbecue:token', data.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 dias
      });

      const user = {
        id: data.id,
        user: data.user,
      };

      const convertString = JSON.stringify(user);

      setCookie(undefined, '@Barbecue:user', convertString, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 dias
      });

      toast(
        <CustomToast
          status="success"
          title="Seja Bem vindo!"
          message="Usuário autenticado com sucesso."
        />,
        {
          icon: false,
          autoClose: 5000,
        }
      );

      router.push('/agenda');
    } catch (err) {
      console.log(err);

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

      return;
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);