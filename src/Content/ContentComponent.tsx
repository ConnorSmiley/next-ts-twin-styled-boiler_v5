import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import JsonData from "Content/JSONContent";

const ContentComponentContainer = styled.div`
  ${tw`
    w-full
    h-auto
    `}
`;

const ContentComponentStyle = styled.div`
  ${tw`
    w-full
    h-full
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

export interface IProps {
}

const ContentComponent: React.FC<IProps> = () => {
  return (
    <>
      <ContentComponentContainer>
        <ContentComponentStyle>
          {JsonData.map(data => {
            return (
              <div>
                <Title key={data.id}>
                  {data.title}
                </Title>
                <Date>
                  {data.date}
                </Date>
              </div>
            );
          })}
        </ContentComponentStyle>
      </ContentComponentContainer>
    </>
  );
};

export default ContentComponent;




