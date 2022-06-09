import React from 'react';
import styles from './styles/side-comments.module.scss';

export const SideComments = () => {
  return (
    <div className={styles.side__comments}>
      <div className={styles.comments__title__block}>
        <h2 className={styles.comments__title}>Комментарии</h2>
        <img className={styles.img__arrow} src="./static/img/sideComments/next.png" alt="next" />
      </div>
    </div>
  );
};
