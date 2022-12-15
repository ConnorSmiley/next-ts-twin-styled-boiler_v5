import React from "react";
import { supabase } from "@/utils/supabase";


export interface IProps {
  blogPost: any;
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
  const { data: blogPost } = await supabase.from("blogPosts").select("id");

  const paths = blogPost.map(({ id }) => {
    params: {
      id : id.toString();
    }
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: post } = await supabase.from("blogPosts").select("*").eq("id", id).single();

  return {
    props: {
      post
    }
  };
};

export default CloudPosts;
