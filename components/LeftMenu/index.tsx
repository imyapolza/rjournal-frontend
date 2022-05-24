import Link from 'next/link';
import React from 'react';
import styles from './LeftMenu.module.scss';

export const LeftMenu = () => {
  const menu = [
    { text: 'Лента', icon: './static/img/leftMenu/feed.png', path: '/' },
    { text: 'Сообщения', icon: './static/img/leftMenu/comment.png', path: '/messages' },
    { text: 'Рейтинг RJ', icon: './static/img/leftMenu/graph.png', path: '/rating' },
    { text: 'Подписки', icon: './static/img/leftMenu/list.png', path: '/follows' },
  ];

  return (
    <div>
      <ul className={styles.list__buttons}>
        {menu.map((item) => (
          <li key={item.icon}>
            <Link href={item.path}>
              <a>
                <button className={styles.button}>
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
