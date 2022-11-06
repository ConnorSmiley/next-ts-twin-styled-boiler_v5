import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";


const AboutContainer = styled.div`
    ${tw`
       w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`

const AboutStyle = styled.div`
    ${tw`
    
    `}
`

export default function About () {
    return (
    <>
        <AboutContainer>
            <AboutStyle>
                <Header />

            </AboutStyle>
        </AboutContainer>
    </>
    )
}
