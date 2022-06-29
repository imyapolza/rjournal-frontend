import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFormType } from '../../redux/slices/authModal';
import MainForm from './form/Main';
import LoginForm from './form/Login';
import styles from './styles/auth-modal.module.scss';
import RegisterForm from './form/Register';

const AuthModal = () => {
  const dispatch = useAppDispatch();

  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const formType = useAppSelector((state) => state.authModal.formType);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const openMainForm = () => {
    dispatch(setFormType('main'));
  };

  const openLoginForm = () => {
    dispatch(setFormType('login'));
  };

  const openRegisterForm = () => {
    dispatch(setFormType('register'));
  };

  const modalContent = (
    <div className={styles.auth__modal}>
      <div className={styles.auth__modal__wrapper}>
        {formType === 'main' && <MainForm openLoginForm={openLoginForm} />}
        {formType === 'login' && (
          <LoginForm openMainForm={openMainForm} openRegisterForm={openRegisterForm} />
        )}
        {formType === 'register' && <RegisterForm openMainForm={openMainForm} />}
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

export default AuthModal;
