import clsx from 'clsx';
import React from 'react';
import styles from '../styles/auth-modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setFormType } from '../../../redux/slices/authModal';

const MainForm = ({ openLoginForm }) => {
  return (
    <>
      <div className={styles.header__text}>Вход в TJ</div>
      <div className={styles.body__buttons}>
        <button className={clsx(styles.body__vk, styles.btns)}>
          <img className={styles.img__button} src={'/./static/img/auth-modal/vk.png'} alt="vk" />{' '}
          <div className={styles.button__text}>ВКонтакте</div>
        </button>
        <button className={clsx(styles.body__google, styles.btns)}>
          <img
            className={styles.img__button}
            src={'/./static/img/auth-modal/google.png'}
            alt="google"
          />
          <div className={styles.button__text}>Google</div>
        </button>
        <button className={clsx(styles.body__email, styles.btns)} onClick={openLoginForm}>
          <img
            className={styles.img__button}
            src={'/./static/img/auth-modal/mail.png'}
            alt="mail"
          />
          <div className={styles.button__text}>Через почту</div>
        </button>
      </div>
      <div className={styles.bottom__buttons}>
        <button className={clsx(styles.btns, styles.bottom__button)}>
          <img
            className={styles.img__button}
            src={'/./static/img/auth-modal/facebook.png'}
            alt="facebook"
          />
        </button>
        <button className={clsx(styles.btns, styles.bottom__button, styles.img__twitter)}>
          <img
            className={styles.img__button}
            src={'/./static/img/auth-modal/twitter.png'}
            alt="twitter"
          />
        </button>
        <button className={clsx(styles.btns, styles.bottom__button, styles.img__apple)}>
          <img
            className={styles.img__button}
            src={'/./static/img/auth-modal/apple-logo.png'}
            alt="apple-logo"
          />
        </button>
      </div>
    </>
  );
};

export default MainForm;
