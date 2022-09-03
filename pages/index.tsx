import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";
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

  useEffect(() => {
    const getPosts = async () => {
      const data = await Api().post.getPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  const router = useRouter();

  return (
    <>
      <MainLayout>
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
