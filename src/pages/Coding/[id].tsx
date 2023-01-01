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

export interface IIdProps {

}

const Id: React.FC<IIdProps> = () => {

    return(
       <>
        <IdContainer>
            <IdStyle>

            </IdStyle>
        </IdContainer>
       </>
    )
}

export default Id
