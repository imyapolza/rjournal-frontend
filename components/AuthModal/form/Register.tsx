import clsx from "clsx";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../../utils/schemas/validations";
import styles from "../styles/auth-modal.module.scss";
import FormField from "../../FormField";
import { Api } from "../../../utils/api";
import { CreateUserDto } from "../../../utils/api/types";
import { useRouter } from "next/router";
import { setIsAuth } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../redux/hooks";

const RegisterForm = ({ openMainForm }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      setIsLoading(true);
      const data = await Api().user.register(dto);
      setIsLoading(false);
      dispatch(setIsAuth(true));
      router.push("/");
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      console.warn("Register error", err);
    }
  };
  const formErrors = form.formState.errors;
  const disableBtn = !form.formState.isValid || form.formState.isSubmitting;

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.header__text} onClick={openMainForm}>
            <img
              className={styles.arrow__back}
              src="/./static/img/auth-modal/arrow-back.png"
              alt="arrow-back"
            ></img>
            К авторизации
          </div>
          <div className={styles.form__block}>
            <FormField
              className={`${styles.modal__form} ${
                formErrors.fullName && styles.modal__form__isNotValid
              }`}
              name="fullName"
              label="Имя и фамилия"
              errorMessage={
                formErrors.fullName && `${formErrors.fullName.message}`
              }
            />
            <FormField
              className={clsx(
                styles.modal__form,
                styles.modal__form__margin,
                `${formErrors.email && styles.modal__form__isNotValid}`
              )}
              name="email"
              label="Введите Email"
              errorMessage={formErrors.email && `${formErrors.email.message}`}
            />
            <FormField
              className={clsx(
                styles.modal__form,
                styles.modal__form__margin,
                `${formErrors.password && styles.modal__form__isNotValid}`
              )}
              name="password"
              label="Введите пароль"
              errorMessage={
                formErrors.password && `${formErrors.password.message}`
              }
            />
            {isLoading && <div>Загрузка...</div>}
            {isError && (
              <div className={styles.register__error}>
                Не удалось зарегистрироваться
              </div>
            )}
            <button
              className={`${styles.login__register__button} ${
                disableBtn ? styles.disable__btn : null
              }`}
              disabled={disableBtn}
              type="submit"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
