import React from 'react';
import styles from './styles/comment.module.scss';

const Comment = ({ avatarUrl, name, comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__wrapper}>
        <div className={styles.comment__block__name}>
          <img className={styles.comment__avatar} src={avatarUrl} alt="avatar" />
          <div className={styles.comment__name}>{name}</div>
        </div>
        <div className={styles.comment__comment}>{comment}</div>
        <div></div>
      </div>
    </div>
  );
};

export default Comment;
