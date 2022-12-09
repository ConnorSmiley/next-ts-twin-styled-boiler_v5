import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import JsonData from "@/Content/JSONContent";

const CloudCardContainer = styled.div`
  ${tw`
    w-full
    h-full
    
    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-gray-100
  rounded-xl
  pt-4
  aspect-w-1
  aspect-h-1
  w-full
  h-full

    `}
`;

const CloudCardStyle = styled.div`
  ${tw`
  grid
  grid-cols-1
  gap-4
  
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-3
    `}
`;

const Title = styled.div`
  ${tw`
    text-white
    text-3xl
    uppercase
    font-bold
    text-black
    flex
    justify-center
    mt-4

    sm:text-xl
    md:text-base
    lg:text-2xl
    `}
`;

const Date = styled.div`
    ${tw`
    mt-14
    flex
    justify-center
    font-bold
    
    md:text-sm
    lg:text-base
 
    `}
`



const PictureContainer = styled.div`
  ${tw`
    
    `}
`;

const ContentContainer = styled.div`
  ${tw`
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
