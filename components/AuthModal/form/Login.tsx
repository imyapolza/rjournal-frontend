import clsx from 'clsx';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from '../styles/auth-modal.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/schemas/validations';
import FormField from '../../FormField';

const LoginForm = ({ openMainForm, openRegisterForm }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => console.log(data);
  const formErrors = form.formState.errors;

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.header__text} onClick={openMainForm}>
            <img
              className={styles.arrow__back}
              src="/./static/img/auth-modal/arrow-back.png"
              alt="arrow-back"></img>
            К авторизации
          </div>
          <div className={styles.form__block}>
            <FormField
              className={clsx(styles.modal__form)}
              name="email"
              label="Введите Email"
              errorMessage={formErrors.email && `${formErrors.email.message}`}
            />
            <FormField
              className={clsx(styles.modal__form, styles.login__password)}
              name="password"
              label="Введите пароль"
              errorMessage={formErrors.password && `${formErrors.password.message}`}
            />
          </div>
          <button
            className={clsx(styles.login__register__button, styles.login__margin__btn)}
            type="submit">
            Войти
          </button>
          <button className={styles.register__button} onClick={openRegisterForm}>
            Регистрация
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
