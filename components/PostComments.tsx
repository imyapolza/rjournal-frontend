import React, { useState, useEffect } from 'react';
import styles from './styles/post-comments.module.scss';
import data from '../data';
import clsx from 'clsx';

const PostComments = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [movementButton, setMovementButton] = useState(0);

  return (
    <div className={styles.comments}>
      <div className={styles.comments__wrapper}>
        <div className={styles.comments__length}>{`${
          data.comments.popular.length + data.comments.new.length
        } комментария`}</div>
        <div className={styles.comments__buttons}>
          <button
            className={clsx(styles.button__popular, styles.button)}
            onClick={() => setActiveButton(false)}>
            популярные
          </button>
          <button className={clsx(styles.button)} onClick={() => setActiveButton(true)}>
            по порядку
          </button>
          <div className={styles.border}>
            <div
              className={`${styles.border__active} ${
                activeButton ? styles.button__order : styles.button__popular
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
