import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";

const DesignContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
       overflow-hidden
 
    `}
`;

const DesignStyle = styled.div`
  ${tw`
    w-full
    h-full
    pt-20
    flex
    justify-center
    items-center
 
    `}
`;

const Grid = styled.div`
  ${tw`
    grid
    grid-cols-2
    gap-4
    mx-auto    
    `}
`;

const Thumbnail = styled.div`
  ${tw`
    bg-black
    w-full
    h-full
    flex
    justify-center
    items-center
    p-32
    
    
    `}
`;

function Design() {
  return (
    <>
      <DesignContainer>
        <DesignStyle>
          <Navbar />
          <Grid>
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </Grid>
        </DesignStyle>
      </DesignContainer>
    </>
  );
}

export default Design;



