import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-black
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

        </HomeStyles>
      </HomeContainer>
    </>
  );
};

export default IndexPage;
