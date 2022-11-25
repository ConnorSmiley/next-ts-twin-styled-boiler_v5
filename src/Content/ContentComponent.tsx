import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import JsonData from "Content/JSONContent";

const ContentComponentContainer = styled.div`
  ${tw`
    w-full
    h-full
    `}
`;

const ContentComponentStyle = styled.div`
  ${tw`
    w-full
    h-full
    grid
    gap-4
    
    sm:grid-cols-2

    lg:grid-cols-3
    lg:place-items-center

    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-white
  w-full
  h-96
  rounded-xl
  pt-4
    
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
    `}
`;

const Date = styled.div`
  ${tw`
    text-white
    text-xl
    flex
    items-center
    justify-center
    
    `}
`;

const ContentContainer = styled.div`
    ${tw`
    flex
    items-center
    justify-center

    
    `}
`


export interface IProps {
}

const ContentComponent: React.FC<IProps> = () => {
  return (
    <>
      <ContentComponentContainer>
        <ContentComponentStyle>
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
                  <ContentContainer>
                    {data.content}
                  </ContentContainer>
                </CardContainer>
              </>
            );
          })}
        </ContentComponentStyle>
      </ContentComponentContainer>
    </>
  );
};

export default ContentComponent;




