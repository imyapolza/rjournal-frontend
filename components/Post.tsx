import Link from "next/link";
import React from "react";
import styles from "./styles/post.module.scss";

type Props = {};

const Post = ({ title, description, img, id }) => {
  const parsedDescr = description.reduce((acc, curr) => {
    acc.push(curr.data.text);
    return acc;
  }, []);

  return (
    <Link href={{ pathname: `/news/${id}` }}>
      <div className={styles.post}>
        <div className={styles.wrapper__post}>
          <h2 className={styles.post__title}>{title}</h2>
          <div className={styles.post__description}>
            {parsedDescr &&
              parsedDescr.map((text, idx) => (
                <div
                  className={styles.post__text}
                  key={idx}
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                />
              ))}
          </div>

          {/* <img className={styles.post__img} src={img} alt="post" /> */}
        </div>
      </div>
    </Link>
  );
};

export default Post;
