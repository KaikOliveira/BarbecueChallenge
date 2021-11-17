import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  user: Yup.string()
    .required('Usuário Obrigatório')
    .min(3, 'Usuário Minino 3 caracteres!'),
  password: Yup.string()
    .min(6, 'Senha Minimo 6 caracteres!')
    .required('Senha Obrigatório'),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nome Obrigatório')
    .min(6, 'Nome Minino 6 caracteres!'),
  user: Yup.string()
    .required('Usuário Obrigatório')
    .min(3, 'Usuário Minino 3 caracteres!'),
  password: Yup.string()
    .min(6, 'Senha Minimo 6 caracteres!')
    .required('Senha Obrigatório'),
});
