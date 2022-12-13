import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import CloudCard from "@/pages/Cloud/CloudCard";
import {supabase} from "../utils/supabase"

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

export async function getStaticProps() {
  const {data: posts, error }= await supabase.from('BlogPosts').select('*')

  if (error) {
    throw new Error(error)
  }

  return {
    props: {
      posts
    }
  }

}

export default function Cloud() {

  return (
    <>
      <CloudContainer>
        <Navbar />
        <DarkBackground>
            <CloudStyle>
              <CloudCard />
            </CloudStyle>
        </DarkBackground>
      </CloudContainer>
    </>
  );
}

