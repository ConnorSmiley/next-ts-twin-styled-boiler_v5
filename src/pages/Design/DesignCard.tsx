import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const DesignCardContainer = styled.div`
    ${tw`
    w-80
    h-80
    
    `}
`

const DesignCardStyle = styled.div`
    ${tw`
    h-80
    w-80
 
    `}
`

const DesignImage = styled.img`
    ${tw`
    h-12
    w-12
    
    `}
`

export interface IDesignCardProps {
}

const DesignCard: React.FC<IDesignCardProps> = () => {

    return(
       <>
        <DesignCardContainer>
            <DesignCardStyle>

            </DesignCardStyle>
        </DesignCardContainer>
       </>
    )

}

export default DesignCard
