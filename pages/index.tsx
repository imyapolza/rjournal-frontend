import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MainLayout } from '../layouts/MainLayout';
import styles from '../styles/Home.module.css';

// interface HomeProps {
//   posts: PostItem[];
// }

const Home: NextPage = () => {
  const posts = [{ id: 1, title: 'title 1', description: 'descr 1' }, {}, {}];
  return (
    <MainLayout>
      sdsddsds
      {/* {posts.map((obj) => (
        <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} />
      ))} */}
    </MainLayout>
  );
};

export default Home;
