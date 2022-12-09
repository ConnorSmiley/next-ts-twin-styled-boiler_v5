import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import CloudCard from "@/Content/Cloud/CloudCard";


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
    px-20
    `}
`;

const CloudStyle = styled.div`
  ${tw`
  w-full
  h-full
  m-5
  text-black
  pt-4
    
    `}
`;

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














