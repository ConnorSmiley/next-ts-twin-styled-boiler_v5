import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";


const CloudContainer = styled.div`
    ${tw`
       w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    overflow-hidden
 
    `}
`

const CloudStyle = styled.div`
    ${tw`
    pt-20
    flex
    
    
    `}
`

export default function Cloud () {
    return (
    <>
        <CloudContainer>
            <CloudStyle>
                <Navbar />

                adjfldjf
            </CloudStyle>
        </CloudContainer>
    </>
    )
}
