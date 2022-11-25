import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import ContentComponent from "@/Content/ContentComponent";


const CloudContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    flex
    justify-center
 
    `}
`;

const DarkBackground = styled.div`
  ${tw`
    mt-20
    bg-black
    opacity-50
    h-full
    w-[98%]
    flex
    justify-center
    items-center
    `}
`;

const CloudStyle = styled.div`
  ${tw`
  w-full
  h-full
  m-5
    
    `}
`;


export default function Cloud() {
  return (
    <>
      <CloudContainer>
        <Navbar />
        <DarkBackground>
          <CloudStyle>
            <ContentComponent />

          </CloudStyle>
        </DarkBackground>
      </CloudContainer>
    </>
  );
}
