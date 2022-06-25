import Link from 'next/link';
import React from 'react';
import styles from './styles/post.module.scss';

type Props = {};

const Post = ({ title, description, img, id }) => {
  return (
    <Link href={{ pathname: `/news/${id}`, query: { title, description, img, id } }}>
      <div className={styles.post}>
        <div className={styles.wrapper__post}>
          <div className={styles.post__header}>
            <h2 className={styles.post__title}>{title}</h2>
            <div className={styles.post__description}>{description}</div>
          </div>
          <img className={styles.post__img} src={img} alt="post" />
        </div>
      </div>
    </Link>
  );
};

export default Post;
