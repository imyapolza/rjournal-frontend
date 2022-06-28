import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFormType } from '../../redux/slices/authModal';
import MainForm from './form/Main';
import styles from './styles/auth-modal.module.scss';

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

  const modalContent = (
    <div className={styles.auth__modal}>
      <div className={styles.auth__modal__wrapper}>
        <div className={styles.auth__modal__header}>
          {formType === 'main' && <div className={styles.header__text}>Вход в TJ</div>}
          {formType === 'login' && (
            <div className={styles.header__text}>
              <img
                className={styles.arrow__back}
                onClick={openMainForm}
                src="/./static/img/auth-modal/arrow-back.png"
                alt="arrow-back"></img>
              Войти через почту
            </div>
          )}
        </div>
        <div className={styles.auth__modal__body}>{formType === 'main' && <MainForm />}</div>
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
