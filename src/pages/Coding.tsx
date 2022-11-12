import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";


const CodingContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`

const CodingStyle = styled.div`
    ${tw`
    h-full
    w-full
    flex
    justify-center
    items-center
    
    `}
`

const Title = styled.div`
    ${tw`
    w-auto
    h-1/2
    uppercase
    font-extrabold
    text-4xl
    
    sm:text-3xl
    md:text-5xl
    lg:text-8xl
    
    `}
`


export default function Coding () {
    return (
    <>
        <CodingContainer>
            <CodingStyle>
                <Navbar />
                <Title>Coding</Title>

            </CodingStyle>
        </CodingContainer>
    </>
    )
}
