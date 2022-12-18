import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PhotoThumbContainer = styled.div`
    ${tw`
    aspect-w-8
    aspect-h-8
    w-full
    h-full
    
    `}
`

const PhotoThumbStyle = styled.div`
    ${tw`

    `}
`

const PhotoImage = styled.img`
    ${tw`

    
    `}
`

export interface IPhotoThumbProps {
    data:any
}

const PhotoThumb: React.FC<IPhotoThumbProps> = ({data}) => {

    return(
       <>
        <PhotoThumbContainer>
            <PhotoThumbStyle>
                <PhotoImage src={data.url}/>

            </PhotoThumbStyle>
        </PhotoThumbContainer>
       </>
    )
}

export default PhotoThumb
