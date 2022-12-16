

import React from "react";
import { supabase } from "@/utils/supabase";

export interface IProps {
  blogPost: any;
  post:any
}

const CloudPosts: React.FC<IProps> = ({ post }) => {
  console.log({post})

  return (
    <>
      <div>
        {post.title}
        {post.content}
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("BlogPosts").select("id");

  const paths = posts.map(({ id }) => ({
    params: {
      id : id.toString()
    }
  }))
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: post } = await supabase.from("BlogPosts").select("*").eq("id", id).single();

  return {
    props: {
      post,
    }
  };
};

export default CloudPosts;
