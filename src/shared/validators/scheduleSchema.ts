import * as Yup from 'yup';

export const createSchedule = Yup.object().shape({
  churrasco: Yup.string()
    .required('Nome do Churrasco é obrigatorio!')
    .min(3, 'Nome do Churrasco Minino 3 caracteres!'),
  data: Yup.string()
    .required('Data é obrigatorio!')
    .min(5, 'Minimo 4 caracteres!'),
  priceTotal: Yup.string(),
});
