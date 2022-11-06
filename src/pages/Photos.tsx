import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";


const PhotosContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    overflow-hidden

    `}
`

const PhotosStyle = styled.div`
    ${tw`
    
    `}
`

export default function Photos () {
    return (
    <>
        <PhotosContainer>
            <PhotosStyle>
                <Navbar />

            </PhotosStyle>
        </PhotosContainer>
    </>
    )
}
