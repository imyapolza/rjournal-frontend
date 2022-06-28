import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles/left-menu.module.scss';

export const LeftMenu = () => {
  const router = useRouter();

  console.log(router);

  const menu = [
    { text: 'Лента', icon: '/static/img/left-menu/feed.png', path: '/' },
    { text: 'Сообщения', icon: '/static/img/left-menu/comment.png', path: '/messages' },
    { text: 'Рейтинг RJ', icon: '/static/img/left-menu/graph.png', path: '/rating' },
    { text: 'Подписки', icon: '/static/img/left-menu/list.png', path: '/follows' },
  ];

  return (
    <div className={styles.left__menu}>
      <ul className={styles.list__buttons}>
        {menu.map((item) => (
          <li className={styles.menu__item} key={item.icon}>
            <Link href={item.path}>
              <a>
                <button
                  className={`${styles.button} ${
                    item.path === router.asPath && styles.button__active
                  }`}>
                  <div className={styles.icon__container}>
                    <img className={styles.icon} src={item.icon} alt="button-icon" />
                  </div>
                  {item.text}
                </button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
