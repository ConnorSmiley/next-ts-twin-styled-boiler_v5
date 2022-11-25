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
 
    `}
`;

const Grid = styled.div`
  ${tw`
  flex
  justify-center
  items-center
  grid
  place-items-center
  min-h-screen
  bg-black
  opacity-[50%]
    
    `}
`;

const Grid2 = styled.div`
  ${tw`
  grid
  gap-2
  grid-cols-2
  z-50
    
    `}
`;

const Thumbnail = styled.div`
  aspect-ratio: 1 / 1;
  ${tw`
    bg-black
    w-20
    h-20
    `}
`;

function Design() {
  return (
    <>
      <DesignContainer>
        <Navbar />
        <DesignStyle>
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


