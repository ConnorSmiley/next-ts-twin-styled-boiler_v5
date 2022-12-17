import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import Coding from "../Coding/index"

const BlogContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`

const BlogStyle = styled.div`
    ${tw`
    
    `}
`

export interface IBlogProps {

}

const Blog: React.FC<IBlogProps> = () => {

    return(
       <>
        <BlogContainer>
          <Coding />
            <BlogStyle>

            </BlogStyle>
        </BlogContainer>
       </>
    )
}

export default Blog
