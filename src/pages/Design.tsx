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
  place-items-center
  min-h-screen
  z-50
    
    `}
`;

const Grid2 = styled.div`
  ${tw`
  grid
  gap-2
  grid-cols-2
  bg-green-500
  z-50
    
    `}
`;

const Thumbnail = styled.div`
  aspect-ratio: 1 / 1;
  ${tw`
    bg-black
    w-auto
    h-auto
    `}
`;

function Design() {
  return (
    <>
      <DesignContainer>
        <Navbar />
        <DesignStyle>
          <Grid>
            <Grid2>
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
            </Grid2>
          </Grid>
        </DesignStyle>
      </DesignContainer>
    </>
  );
}

export default Design;


