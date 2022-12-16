import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import CloudCard from "@/pages/Cloud/CloudCard";
import { supabase } from "@/utils/supabase";
import Footer from "@/components/Footer";

const CloudContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`;

const DarkBackground = styled.div`
  ${tw`
    mt-16
    h-full
    w-[98%]
    flex
    justify-center
    px-2
    
    sm:px-20
    sm:pt-4
    md:mt-20
    `}
`;

const CloudStyle = styled.div`
  ${tw`
  w-full
  h-auto
  m-5
  grid
  grid-cols-1
  gap-2
  
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-3
    
    `}
`;

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

const Index: React.FC<ICloudProps> = ({ blogPost }) => {

  return (
    <>
      <CloudContainer>
        <Navbar />
        <DarkBackground>
          <CloudStyle>

            {blogPost.reverse().map((posts:any) => (
              <>
                <CloudCard posts={posts}/>
              </>
            ))}

          </CloudStyle>
        </DarkBackground>
      </CloudContainer>
      <Footer />
    </>
  );
};

export default Index;
