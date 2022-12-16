import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SidebarNavContainer = styled.div`
  ${tw`
    absolute
    left-0
    h-screen
    w-80
    `}
`;

const SidebarNavStyle = styled.div`
  ${tw`
    relative
    right-0
    h-full
    flex
    flex-col
    items-center  
    justify-center
    place-items-end
    
    `}
`;

const SidebarNavText = styled.div`
  ${tw`
    text-white
    text-4xl
    font-thin
    space-y-2
    flex
    flex-col
    justify-center
    place-items-end
    h-80
    border-r-4
    border-yellow-500
    pr-10
 
    `}
`;

const Projects = styled.div`
  ${tw`
  px-8
  -mr-10
  py-4
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

const Blog = styled.div`
  ${tw`
  px-8
  -mr-10
  py-4
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

export interface ISidebarNavProps {
}

const SidebarNav: React.FC<ISidebarNavProps> = () => {

  return (
    <>
      <SidebarNavContainer>
        <SidebarNavStyle>
          <SidebarNavText>
            <Projects>
              Projects
            </Projects>
            <Blog>
              Blog
            </Blog>
          </SidebarNavText>
        </SidebarNavStyle>
      </SidebarNavContainer>
    </>
  );
};

export default SidebarNav;
