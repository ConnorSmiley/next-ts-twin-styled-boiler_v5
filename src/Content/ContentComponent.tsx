import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

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

    `}
`;


export interface IProps {
}

const ContentComponent: React.FC<IProps> = () => {
  return (
    <>
      <ContentComponentContainer>
        <ContentComponentStyle>
        </ContentComponentStyle>
      </ContentComponentContainer>
    </>
  );
};

export default ContentComponent;




