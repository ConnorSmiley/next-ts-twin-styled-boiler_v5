import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const IdContainer = styled.div`
    ${tw`
    
    `}
`

const IdStyle = styled.div`
    ${tw`
    
    `}
`

export interface IidProps {

}

const id: React.FC<IidProps> = () => {

    return(
       <>
        <IdContainer>
            <IdStyle>

            </IdStyle>
        </IdContainer>
       </>
    )
}

export default [id]
