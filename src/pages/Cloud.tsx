import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";


const CloudContainer = styled.div`
    ${tw`
       w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`

const CloudStyle = styled.div`
    ${tw`
    
    `}
`

export default function Cloud () {
    return (
    <>
        <CloudContainer>
            <CloudStyle>
                <Header />

            </CloudStyle>
        </CloudContainer>
    </>
    )
}
