import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Обязатально для заполнения'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть не менее 6 симоволов')
    .required('Обязатально для заполнения'),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema);
