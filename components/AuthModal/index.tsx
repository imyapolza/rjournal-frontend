import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MainForm from "./form/Main";
import LoginForm from "./form/Login";
import styles from "./styles/auth-modal.module.scss";
import RegisterForm from "./form/Register";

const AuthModal = () => {
  const [formType, setFormType] = useState<string>("main");

  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const openMainForm = () => {
    setFormType("main");
  };

  const openLoginForm = () => {
    setFormType("login");
  };

  const openRegisterForm = () => {
    setFormType("register");
  };

  const modalContent = (
    <div className={styles.auth__modal}>
      <div className={styles.auth__modal__wrapper}>
        {formType === "main" && <MainForm openLoginForm={openLoginForm} />}
        {formType === "login" && (
          <LoginForm
            openMainForm={openMainForm}
            openRegisterForm={openRegisterForm}
          />
        )}
        {formType === "register" && (
          <RegisterForm openMainForm={openMainForm} />
        )}
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default AuthModal;
