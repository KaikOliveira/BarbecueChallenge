import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  login: Yup.string()
    .required('Usuário Obrigatório')
    .min(3, 'Usuário Minino 3 caracteres!'),
  password: Yup.string()
    .min(6, 'Senha Minimo 6 caracteres!')
    .required('Senha Obrigatório'),
});
