import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import Image from 'next/image'

const ImageComponentContainer = styled.div`
    ${tw`
    
    `}
`

const ImageComponentStyle = styled.div`
    ${tw`
    
    `}
`

export interface IImageComponentProps {

}

const ImageComponent: React.FC<IImageComponentProps> = () => {

    return(
       <>
        <ImageComponentContainer>
            <ImageComponentStyle>

            </ImageComponentStyle>
        </ImageComponentContainer>
       </>
    )
}

export default ImageComponent
