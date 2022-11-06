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
                <Navbar />

            </DesignStyle>
        </DesignContainer>
    </>
    )
}

export default Design
