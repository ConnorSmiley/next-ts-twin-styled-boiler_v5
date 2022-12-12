import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import JsonData from "@/Content/JSONContent";

const CloudCardContainer = styled.div`
  ${tw`
    w-full
    h-full
    `}
`;

const CloudCardStyle = styled.div`
  ${tw`
  grid
  grid-cols-1
  gap-2
  
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-3
    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-gray-100
  rounded-md
  aspect-w-1
  aspect-h-1
  flex
  flex-col
  h-full
  w-full
  
  // sm:h-20
  // md:h-20
  // lg:h-20
  xl:h-80
    `}
`;

const CardStyle = styled.div`
  ${tw`
    flex-col
    justify-center
    h-full
    
    `}
`;

const Title = styled.div`
  ${tw`
    text-white
    text-xl
    uppercase
    font-bold
    text-black
    flex
    items-center
    justify-center
    text-center
    pt-2
    px-2

    sm:pt-4
    sm:text-xl
    md:text-xl
    lg:text-lg
    xl:text-2xl
    
    `}
`;


const PictureContainer = styled.div`
  ${tw`
  flex
  items-center
  justify-center
  h-full
  pb-40
  
    `}
`;

const Picture = styled.img`
  ${tw`
  
  sm:h-24
  md:h-32
  lg:h-28
   xl:h-52
    `}
`;

const ContentContainer = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  ${tw`
    px-3
    text-base
    font-normal
    justify-center
    text-center
    overflow-hidden
    h-6
    w-full
    absolute
    bottom-0
    pb-20
   
   sm:text-xl
   
   lg:text-base
   xl:text-xl
   xl:pb-24
   
   `}
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    pt-2
    absolute
    bottom-0
    pb-4
    w-full
    
    `}
`;

const Date = styled.div`
  ${tw`
    flex
    justify-center
    font-bold
    font-thin
    text-sm
    absolute
    bottom-6
    left-3
    
    sm:text-sm
    sm:mt-2
    sm:pb-0
    md:text-base
    lg:text-base
    lg:mt-1
    lg:pb-0
    lg:bottom-5
    xl:text-lg
    xl:bottom-4

    `}
`;


const ButtonClick = styled.div`
  ${tw`
  w-20
  h-8
  rounded-md
  font-bold
  uppercase
    flex
    items-center
    justify-evenly
    border
    border-2
    border-pink-500
    text-sm
    absolute
    right-6
    bottom-4
    hover:bg-pink-500
    
    hover:bg-black
    cursor-pointer
    
    sm:h-8
    sm:w-20
    
    md:right-4
    
    `}
`;

export interface IProps {
}

const CloudCard: React.FC<IProps> = () => {
  const router = useRouter();

  return (
    <>
      <CloudCardContainer>
        <CloudCardStyle>
          {JsonData.map(data => {
            return (
              <>
                <CardContainer>
                  <CardStyle>
                    <Title key={data.id}>
                      {data.title}
                    </Title>

                    <PictureContainer>
                      <Picture src={data.img} />
                    </PictureContainer>

                    <ContentContainer>
                      {data.content}
                    </ContentContainer>
                    <Date>
                      {data.date}
                    </Date>

                    <ButtonContainer>

                      <Link
                        href={'/Cloud/' + data.id}

                        // href={{
                        // pathname: data.url,
                        // query: { cloud: router.query.url }}}
                      >
                        <ButtonClick>
                          Click
                        </ButtonClick>
                      </Link>

                    </ButtonContainer>
                  </CardStyle>
                </CardContainer>
              </>
            );
          })}
        </CloudCardStyle>
      </CloudCardContainer>
    </>
  );
};

export default CloudCard;
