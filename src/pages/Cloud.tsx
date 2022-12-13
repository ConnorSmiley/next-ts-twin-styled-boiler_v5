import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import CloudCard from "@/pages/Cloud/CloudCard";
import { supabase } from "../utils/supabase";

const CloudContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`;

const DarkBackground = styled.div`
  ${tw`
    mt-20
    h-full
    w-[98%]
    flex
    justify-center
    px-2
    
    sm:px-20
    sm:pt-4
    `}
`;

const CloudStyle = styled.div`
  ${tw`
  w-full
  h-full
  m-5
  text-black
    
    `}
`;

const PropsTitle = styled.div`
  ${tw`
    text-white
    h-20
    w-20
    
    `}
`;

const PropsContent = styled.div`
    ${tw`
    text-white
    h-20
    w-20
    
    `}
`

const PropsTime = styled.div`
    ${tw`
    text-white
    h-20
    w-20

    
    `}
`


export interface ICloudProps {
  blogPost: any;
}

export const getStaticProps = async () => {
  const { data: blogPost } = await supabase.from("BlogPosts").select("*");
  return {
    props: {
      blogPost
    }
  };
};

const Cloud: React.FC<ICloudProps> = ({ blogPost }) => {
  console.log(blogPost);
  return (
    <>
      <CloudContainer>
        <Navbar />
        <DarkBackground>
          <CloudStyle>
            {blogPost.map((val: any, idx: any) => (
              <>
              <PropsTitle key={blogPost.id}>
                {blogPost[idx].title}
              </PropsTitle>
              <PropsContent>
                {blogPost[idx].content}
              </PropsContent>
                <PropsTime>
                  {blogPost[idx].TimeStamp}
                </PropsTime>
              </>
            ))}

            {/*<CloudCard />*/}
          </CloudStyle>
        </DarkBackground>
      </CloudContainer>
    </>
  );
};

export default Cloud;
