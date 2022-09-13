import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setChangePost } from "../redux/slices/changePost";
import { Api } from "../utils/api";
import { PostItem } from "../utils/api/types";
import styles from "./styles/full-post.module.scss";

interface FullPostProps {
  post: PostItem;
}

const FullPost: React.FC<FullPostProps> = ({ post }) => {
  const [isLoadingDelete, setLoadingDelete] = useState(false);

  const dispatch = useAppDispatch();

  const router = useRouter();
  const { query } = useRouter();

  const parsedDescr = JSON.parse(post.body).reduce((acc, curr) => {
    acc.push(curr.data.text);
    return acc;
  }, []);

  const onDeletePost = async () => {
    try {
      setLoadingDelete(true);
      const data = await Api().post.deletePost(Number(query.slug));
      setLoadingDelete(false);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onParseText = (text) => {
    const parsedText = text.reduce((acc, curr) => {
      acc.push(curr.data.text);
      return acc;
    }, []);

    return parsedText;
  };

  const onChangePost = async () => {
    try {
      const data = await Api().post.getPost(Number(query.slug));
      const newObj = {
        title: data.title,
        body: onParseText(JSON.parse(data.body)),
      };

      dispatch(setChangePost(newObj));
      router.push("/write");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className={styles.post__wrapper}>
      <div className={styles.post__header}>
        <h2 className={styles.post__title}>{post.title}</h2>
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
          <button
            className={styles.button__delete}
            onClick={onDeletePost}
            disabled={isLoadingDelete}
          >
            {isLoadingDelete ? <span>Удаление...</span> : <span>Удалить</span>}
          </button>
          <button
            className={styles.button__delete}
            onClick={onChangePost}
            disabled={isLoadingDelete}
          >
            Редактировать
          </button>
        </div>
      </div>

      {/* <img className={styles.post__image} src={query.img} alt="post-img" /> */}
    </div>
  );
};

export default FullPost;
