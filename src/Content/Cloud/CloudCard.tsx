import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "@mui/material";
import ContentComponent from "@/Content/ContentComponent";
import JsonData from "@/Content/JSONContent";

const CardContainer = styled.div`
  ${tw`
  bg-gray-100
  rounded-xl
  pt-4
  h-auto
  w-auto
  aspect-w-1
  aspect-h-1

    `}
`;


const CloudCardStyle = styled.div`
  ${tw`
  grid
  grid-cols-3
  gap-4
    
    `}
`;

const Title = styled.div`
  ${tw`
    text-white
    text-3xl
    uppercase
    font-bold
    flex
    items-center
    justify-center
    text-black

    `}
`;

const ContentContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    
    `}
`;

const PictureContainer = styled.div`
  ${tw`
    
    `}
`;

const CloudCardContainer = styled.div`
  ${tw`
    w-full
    h-full
    
    `}
`;

export interface IProps {

}

const CloudCard: React.FC<IProps> = () => {

  return (
    <>
      <CloudCardContainer>
        <CloudCardStyle>
          {JsonData.map(data => {
            return (
              <>
                <CardContainer>
                  <Title key={data.id}>
                    {data.title}
                  </Title>
                  <Date>
                    {data.date}
                  </Date>
                  <PictureContainer>
                    {data.img}
                  </PictureContainer>
                  <ContentContainer>
                    {data.content}
                  </ContentContainer>
                </CardContainer>
              </>
            );
          })}
        </CloudCardStyle>
      </CloudCardContainer>
    </>
  );
};

export default CloudCard;
