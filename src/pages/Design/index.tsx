import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignThumb from "@/pages/Design/DesignThumb";
import { supabase } from "@/utils/supabase";
import { IProps } from "@/pages/Cloud/CloudCard";
import DesignCard from "@/pages/Design/DesignCard";

const DesignContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`;

const DesignStyle = styled.div`
  ${tw`
  w-full
  h-full
  pt-20
 
    `}
`;

const GridWidth = styled.div`
  ${tw`
   justify-center
   
    `}
`;

const MainGrid = styled.div`
  ${tw`
    grid
    grid-cols-1
    gap-4
    place-items-center
    justify-center
    
    md:grid-cols-3
    
    `}
`;

const PictureContainer = styled.img`
  ${tw`
    // aspect-w-16
    // aspect-h-12
    h-12
    w-12
    
    `}
`;

export interface IDesignProps {
  thumbnails: any;
}

export const getStaticProps = async () => {
  const { data: thumbnails } = await supabase.from("DesignThumbnails").select("*");
  return {
    props: {
      thumbnails
    }
  };
};

const Design: React.FC<IDesignProps> = ({ thumbnails }) => {
  return (
    <>
      <DesignContainer>
        <Navbar />
        <DesignStyle>
          <GridWidth>
            <MainGrid>

              {thumbnails.map((data: any) => {
                <DesignCard>;
                  {data}
                </DesignCard>;
              })}
              {/*<DesigngThumb />*/}
              {/*<DesignThumb />*/}
              {/*<DesignThumb />*/}
              {/*<DesignThumb />*/}
              {/*<DesignThumb />*/}
              {/*<DesignThumb />*/}
              {/*<DesignThumb />*/}
            </MainGrid>
          </GridWidth>
        </DesignStyle>
      </DesignContainer>
      <Footer />
    </>
  );
}
  ;

  export default Design;


