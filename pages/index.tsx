import type { NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '../layouts/MainLayout';
import styles from '../styles/Home.module.css';
import Post from '../components/Post';
import { useRouter } from 'next/router';

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
      title:
        '«Это всё моё бесконтрольное эго»: актёр Том Хэнкс рассказал о привычке врываться на чужие свадьбы',
      description:
        'Актёр известен тем, что любит неожиданно появляться и «портить» чужие торжества.',
      img: 'https://leonardo.osnova.io/8bf5d79a-932c-5724-a8ac-3a23a3313146/-/preview/2100/-/format/webp/',
    },
    {
      id: 3,
      title:
        '«Удалите приложение для отслеживания цикла»: американки опасаются раскрытия данных и гипотетических уголовных дел ',
      description:
        'После отмены конституционного права на аборт в США, пользовательницы трекеров обеспокоились, данные приложений могут быть использованы против них.',
      img: 'https://leonardo.osnova.io/1439891c-95a6-55ee-8e0b-5fc10d89908f/-/preview/2100/-/format/webp/',
    },
  ];

  const router = useRouter();

  return (
    <>
      <MainLayout>
        {posts.map((obj, idx) => (
          <Post
            key={obj.id}
            id={obj.id}
            title={obj.title}
            description={obj.description}
            img={obj.img}
          />
        ))}
      </MainLayout>
    </>
  );
};

export default Home;
