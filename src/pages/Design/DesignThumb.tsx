import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const DesignThumbContainer = styled.div`
    ${tw`
    bg-black
    aspect-w-16
    aspect-h-12
    w-full
    
    `}
`

const DesignThumbStyle = styled.div`
    ${tw`
    `}
`

export interface IDesignThumbProps {

}

const DesignThumb: React.FC<IDesignThumbProps> = () => {

    return(
       <>
        <DesignThumbContainer>
            <DesignThumbStyle>

            </DesignThumbStyle>
        </DesignThumbContainer>
       </>
    )
}

export default DesignThumb
