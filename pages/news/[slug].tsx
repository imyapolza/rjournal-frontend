import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React from "react";
import FullPost from "../../components/FullPost";
import Post from "../../components/Post";
import PostComments from "../../components/PostComments";
import { MainLayout } from "../../layouts/MainLayout";
import { Api } from "../../utils/api";

type Props = {};

const FullPostPage = ({ post }) => {
  console.log("post", post);
  return (
    <MainLayout>
      <FullPost post={post} />
      <PostComments />
    </MainLayout>
  );
};

export async function getServerSideProps(ctx) {
  const id = Number(ctx.query.slug);

  let post = {};

  try {
    post = await Api(ctx).post.getPost(id);
  } catch (err) {
    console.log(err);
  }

  return {
    props: { post },
  };
}

export default FullPostPage;
