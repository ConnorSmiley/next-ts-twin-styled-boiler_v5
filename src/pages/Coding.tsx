import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";


const CodingContainer = styled.div`
    ${tw`
       w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    overflow-hidden
 
    `}
`

const CodingStyle = styled.div`
    ${tw`
    
    `}
`

export default function Coding () {
    return (
    <>
        <CodingContainer>
            <CodingStyle>
                <Navbar />

            </CodingStyle>
        </CodingContainer>
    </>
    )
}
