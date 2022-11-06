import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";

const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900

    `}
`;

const HomeStyles = styled.div`
  ${tw`
  w-full
  h-full
  flex
  
    
    `}
`;

const IndexPage: NextPage = () => {

  return (
    <>
      <HomeContainer>
        <HomeStyles>
          <Header />
        </HomeStyles>
      </HomeContainer>
    </>
  );
};

export default IndexPage;
