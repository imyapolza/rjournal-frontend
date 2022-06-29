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
              className={clsx(
                styles.login__email,
                styles.login__form,
                form.formState.errors.email?.message && styles.errorInput,
              )}
              name="email"
              label="Введите Email"
              errorMessage={
                form.formState.errors.email?.message && `${form.formState.errors.email?.message}`
              }
            />
            <FormField
              className={clsx(
                styles.login__password,
                styles.login__form,
                form.formState.errors.password?.message && styles.errorInput,
              )}
              name="password"
              label="Введите пароль"
              errorMessage={
                form.formState.errors.password?.message &&
                `${form.formState.errors.password?.message}`
              }
            />
          </div>
          <button className={styles.login__register__button} type="submit">
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
