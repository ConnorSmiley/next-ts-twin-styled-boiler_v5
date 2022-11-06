import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";

const DesignContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`

const DesignStyle = styled.div`
    ${tw`
 
    `}
`

function Design () {
    return (
    <>
        <DesignContainer>
            <DesignStyle>
                <Header />

            </DesignStyle>
        </DesignContainer>
    </>
    )
}

export default Design
