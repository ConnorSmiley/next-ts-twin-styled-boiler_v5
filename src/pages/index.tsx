import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";

const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    overflow-hidden

    `}
`;

const HomeStyles = styled.div`
  ${tw`
  w-full
  h-full
    pt-14
    flex
    items-center
    justify-center
    text-6xl
    uppercase
    font-extrabold
    
    `}
`;




const IndexPage: NextPage = () => {

  return (
    <>
      <HomeContainer>
        <HomeStyles>
          <Navbar />
          home
        </HomeStyles>
      </HomeContainer>
    </>
  );
};

export default IndexPage;
