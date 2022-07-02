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
  const formErrors = form.formState.errors;

  React.useEffect(() => {
    console.log('formErrors', formErrors);
  }, [formErrors]);

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
              className={styles.modal__form}
              name="fullname"
              label="Имя и фамилия"
              errorMessage={formErrors.fullname && `${formErrors.fullname.message}`}
            />
            <FormField
              className={clsx(styles.modal__form, styles.modal__form__margin)}
              name="email"
              label="Введите Email"
              errorMessage={formErrors.email && `${formErrors.email.message}`}
            />
            <FormField
              className={clsx(styles.modal__form, styles.modal__form__margin)}
              name="password"
              label="Введите пароль"
              errorMessage={formErrors.password && `${formErrors.password.message}`}
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
