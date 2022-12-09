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

const CloudCardStyle = styled.div`
  ${tw`
  grid
  grid-cols-1
  gap-2
  
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-3
    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-gray-100
  rounded-md
  aspect-w-1
  aspect-h-1
  w-full
  h-full
  
  // sm:w-20
  // md:w-20
  // lg:w-20
  // xl:w-80
    `}
`;

const CardStyle = styled.div`
  ${tw`
    flex-col
    justify-center
    overflow-hidden
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
    items-center
    justify-center
    pt-6

    sm:text-xl
    md:text-base
    lg:text-2xl
    `}
`;

const Date = styled.div`
  ${tw`
    mt-2
    flex
    justify-center
    font-bold
    font-thin
    pb-4
    
    md:text-sm
    lg:text-base
 
    `}
`;

const PictureContainer = styled.div`
  ${tw`
  h-56
  w-full
    
    `}
`;

const ContentContainer = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  ${tw`
    px-3
    text-xl
    font-normal
    justify-center
    text-center
    overflow-hidden
    h-6
    w-full
   
   `}
`;

const ButtonContainer = styled.div`
    ${tw`
    flex
    items-center
    justify-center
    pt-4
    
    `}
`

const ButtonClick = styled.div`
  ${tw`
  w-24
  h-10
  rounded-md
  font-bold
  uppercase
    flex
    items-center
    justify-evenly
    border
    border-pink-500
    hover:bg-black
    cursor-pointer
    
    
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
                  <CardStyle>
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
                    <ButtonContainer>
                      <ButtonClick>
                        Click
                      </ButtonClick>
                    </ButtonContainer>
                  </CardStyle>
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
