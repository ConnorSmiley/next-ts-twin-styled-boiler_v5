import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import Navbar from "@/components/Navbar";
import SidebarNavCoding from "@/pages/Coding/SidebarNavCoding";

const ProjectsContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`

const ProjectsStyle = styled.div`
    ${tw`
    
    `}
`

export interface IProjectsProps {

}

const Projects: React.FC<IProjectsProps> = () => {

    return(
       <>
        <ProjectsContainer>
          <Navbar />
            <ProjectsStyle>
              <SidebarNavCoding />

            </ProjectsStyle>
        </ProjectsContainer>
       </>
    )
}

export default Projects
