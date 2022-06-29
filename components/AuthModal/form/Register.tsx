import clsx from 'clsx';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/schemas/validations';
import styles from '../styles/auth-modal.module.scss';
import FormField from '../../FormField';

const RegisterForm = ({ openMainForm }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
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
                styles.login__register__fullName,
                styles.login__register__form,
                form.formState.errors.fullName?.message && styles.errorInput,
              )}
              name="fullName"
              label="Имя и фамилия"
              errorMessage={
                form.formState.errors.fullName?.message &&
                `${form.formState.errors.fullName?.message}`
              }
            />
            <FormField
              className={clsx(
                styles.login__register__email,
                styles.login__register__form,
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
                styles.login__register__password,
                styles.login__register__form,
                form.formState.errors.password?.message && styles.errorInput,
              )}
              name="password"
              label="Введите пароль"
              errorMessage={
                form.formState.errors.password?.message &&
                `${form.formState.errors.password?.message}`
              }
            />
            <button className={styles.login__register__button} type="submit">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
