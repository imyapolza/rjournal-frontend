import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.list}>
          <li className={`${styles.list__item} ${styles.list__item__1}`}>
            <div className={styles.container__menu}>
              <img className={styles.img__menu} src="/static/img/menu.png" alt="menu" />
            </div>
            <Link href="/ldfdffd">
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
                <button className={styles.button__support}>Поддержать</button>
              </Link>
            </div>
          </li>
          <li className={`${styles.list__item} ${styles.list__item__2}`}>
            <div className={styles.input__block}>
              <label className={styles.label__create}>
                <input className={styles.input} type="text" placeholder="Поиск" />
              </label>
            </div>
            <button className={styles.button__create}>
              <img className={styles.img__plus} src="./static/img/plus.png" alt="plus" />
              <span>Создать</span>
            </button>
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
