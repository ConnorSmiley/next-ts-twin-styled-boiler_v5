import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ContentComponentContainer = styled.div`
    ${tw`
    bg-gray-500
    w-full
    rounded-lg
    
    `}
`

const ContentComponentStyle = styled.div`
    ${tw`
    flex
    w-full
    h-full
    
    `}
`

const Header = styled.div`
    ${tw`
    
    `}
`

export default function ContentComponent () {
    return (
    <>
        <ContentComponentContainer>
            <ContentComponentStyle>
              <Header header={header}/>


            </ContentComponentStyle>
        </ContentComponentContainer>
    </>
    )
}
