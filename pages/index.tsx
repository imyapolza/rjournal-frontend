import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";
import styles from "../components/styles/home.module.scss";
import Post from "../components/Post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Api } from "../utils/api";
import { parse } from "path";

// interface HomeProps {
//   posts: PostItem[];
// }

const Home: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoadingPosts(true);
      const data = await Api().post.getPosts();
      setLoadingPosts(false);
      setPosts(data);
    };

    getPosts();
  }, []);

  const router = useRouter();

  return (
    <>
      <MainLayout>
        {posts.length === 0 && !isLoadingPosts && (
          <div className={styles.default}>Постов нет. Добавьте его первым!</div>
        )}

        {isLoadingPosts && (
          <div className={styles.default}>Посты загружаются...</div>
        )}
        {posts &&
          posts.map((obj, idx) => (
            <Post
              key={idx}
              id={obj.id}
              title={obj.title}
              description={JSON.parse(obj.body)}
              img={obj.img}
            />
          ))}
      </MainLayout>
    </>
  );
};

export default Home;
