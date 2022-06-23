import type { NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '../layouts/MainLayout';
import styles from '../styles/Home.module.css';
import Post from '../components/Post';

// interface HomeProps {
//   posts: PostItem[];
// }

const Home: NextPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Microsoft постепенно сократит бизнес в России',
      description:
        '"До тех пор, пока почти ничего не останется", - приводят СМИ слова президента компании.',
      img: 'https://leonardo.osnova.io/c08d31c2-de7c-55bc-af49-bcf891dd9e42/-/preview/1300/-/format/webp/',
    },
    {
      id: 2,
      title: 'Microsoft постепенно сократит бизнес в России',
      description:
        '"До тех пор, пока почти ничего не останется", - приводят СМИ слова президента компании.',
      img: 'https://leonardo.osnova.io/c08d31c2-de7c-55bc-af49-bcf891dd9e42/-/preview/1300/-/format/webp/',
    },
    {
      id: 3,
      title: 'Microsoft постепенно сократит бизнес в России',
      description:
        '"До тех пор, пока почти ничего не останется", - приводят СМИ слова президента компании.',
      img: 'https://leonardo.osnova.io/c08d31c2-de7c-55bc-af49-bcf891dd9e42/-/preview/1300/-/format/webp/',
    },
  ];
  return (
    <>
      <MainLayout>
        {posts.map((obj) => (
          <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} img={obj.img} />
        ))}
      </MainLayout>
    </>
  );
};

export default Home;
