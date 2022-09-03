import { useRouter } from "next/router";
import React from "react";
import { PostItem } from "../utils/api/types";
import styles from "./styles/full-post.module.scss";

interface FullPostProps {
  post: PostItem;
}

const FullPost: React.FC<FullPostProps> = ({ post }) => {
  const router = useRouter();
  const { query } = useRouter();

  const parsedDescr = JSON.parse(post.body).reduce((acc, curr) => {
    acc.push(curr.data.text);
    return acc;
  }, []);

  return (
    <div className={styles.post__wrapper}>
      <div className={styles.post__header}>
        <h2 className={styles.post__title}>{post.title}</h2>
        <div className={styles.description}>
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
      </div>
      {/* <img className={styles.post__image} src={query.img} alt="post-img" /> */}
    </div>
  );
};

export default FullPost;
