import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/header.module.scss';
import { WriteModal } from './WriteModal';
import { useRouter } from 'next/router';
import { setActiveModal } from '../redux/slices/modal';
import { selectActiveModal } from '../redux/slices/modal';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const activeModal = useAppSelector(selectActiveModal);

  const openModal = (e) => {
    e.preventDefault();
    dispatch(setActiveModal(true));
    router.push('/write');
  };

  return (
    <>
      <header className={styles.header}>
        <ul className={styles.list}>
          <li className={`${styles.list__item} ${styles.list__item__1}`}>
            <div className={styles.container__menu}>
              <img className={styles.img__menu} src="/static/img/menu.png" alt="menu" />
            </div>
            <Link href="/">
              <a className={styles.logo}>
                <img height={35} src="/static/img/logo.svg" alt="Logo" />
              </a>
            </Link>
            <div className={styles.support}>
              <Link href="/donate">
                <a className={styles.link__heart}>
                  <img
                    className={styles.img__heart}
                    height={35}
                    src="/static/img/support.svg"
                    alt="Logo"
                  />
                </a>
              </Link>
              <Link href="/donate">
                <a>
                  <button className={styles.button__support}>Поддержать</button>
                </a>
              </Link>
            </div>
          </li>
          <li className={`${styles.list__item} ${styles.list__item__2}`}>
            <div className={styles.input__block}>
              <label className={styles.label__create}>
                <input className={styles.input} type="text" placeholder="Поиск" />
              </label>
            </div>
            <Link href="/write">
              <a>
                <button className={styles.button__create} onClick={openModal}>
                  <img className={styles.img__plus} src="./static/img/plus.png" alt="plus" />
                  <span>Создать</span>
                </button>
              </a>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.list__item__3}`}>
            <div className={styles.container__bell}>
              <img className={styles.img__bell} src="./static/img/bell.png" alt="bell" />
            </div>
            <div className={styles.signIn}>
              <img className={styles.img__user} src="./static/img/user.png" alt="user" />
              <span>Войти</span>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};
