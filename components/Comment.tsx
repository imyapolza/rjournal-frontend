import React from 'react';
import styles from './styles/comment.module.scss';

const Comment = ({ comment }) => {
  return (
    <>
      <div className={`${styles.comment__wrapper}`}>
        <div className={styles.user}>
          <img className={styles.avatar} src={comment.user.avatarUrl} alt="avatar" />
          <div className={styles.fullname}>{comment.user.fullname}</div>
          <div className={styles.createdAt}>{comment.createdAt}</div>
        </div>
        <div className={styles.text}>{comment.text}</div>
        <button className={styles.btn__reply}>Ответить</button>
      </div>
    </>
  );
};

export default Comment;
