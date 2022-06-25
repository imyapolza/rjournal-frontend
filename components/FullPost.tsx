import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles/full-post.module.scss';

const FullPost = () => {
  const router = useRouter();
  const { query } = useRouter();

  return (
    <div className={styles.post__wrapper}>
      <div className={styles.post__header}>
        <h2 className={styles.post__title}>{query.title}</h2>
        <div className={styles.description}>{query.description}</div>
      </div>
      <img className={styles.post__image} src={query.img} alt="post-img" />
    </div>
  );
};

export default FullPost;
