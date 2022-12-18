import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const DesignThumbContainer = styled.div`
  ${tw`
    aspect-w-16
    aspect-h-12
    w-full
    h-full
    
    `}
`;

const DesignThumbStyle = styled.img`
  ${tw`
     object-cover

    hover:cursor-pointer
    hover:bg-black
    `}
`;

const HoverContainer = styled.div`
  ${tw`
  h-auto
  w-auto
  opacity-0
  flex
  items-center
  justify-center
  flex-col
  
  hover:cursor-pointer
  hover:opacity-100
  hover:bg-black
  hover:bg-opacity-60

    `}
`;


const HoverThumbTitle = styled.div`
  ${tw`
  text-black
  text-6xl
  font-bold
    
    `}
`;

const HoverThumbDescription = styled.div`
  ${tw`
  text-black
  text-4xl
  font-light
    
    `}
`;

export interface IDesignThumbProps {
  data: any;
}

const DesignThumb: React.FC<IDesignThumbProps> = ({ data }) => {

  return (
    <>
      <DesignThumbContainer>

        <DesignThumbStyle src={data.url} />

          <HoverContainer>
            <HoverThumbTitle>
              {data.Company}
            </HoverThumbTitle>
            <HoverThumbDescription>
              {data.ThumbDescription}
            </HoverThumbDescription>
          </HoverContainer>

      </DesignThumbContainer>
    </>
  );
};

export default DesignThumb;
