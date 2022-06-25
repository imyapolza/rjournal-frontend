import { useRouter } from 'next/router';
import React from 'react';
import FullPost from '../../components/FullPost';
import Post from '../../components/Post';
import PostComments from '../../components/PostComments';
import { MainLayout } from '../../layouts/MainLayout';

type Props = {};

const FullPostPage = ({}) => {
  return (
    <MainLayout>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
};

export default FullPostPage;
