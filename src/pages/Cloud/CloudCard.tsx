import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const CloudCardContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    justify-center
    
    `}
`;

const CloudCardStyle = styled.div`
  ${tw`
  w-[80%]
  h-52
  border
  border-red-500
  
    `}
`;

const CardContainer = styled.div`
  ${tw`
  flex
  items-center
  justify-center
  h-full
    `}
`;

const CardStyle = styled.div`
  ${tw`
    
    `}
`;

const Title = styled.div`
  ${tw`
    text-white
    text-xl
    uppercase
    font-bold
    text-white
    text-center
    pt-2
    px-2

    sm:pt-4
    sm:text-xl
    md:text-xl
    lg:text-lg
    xl:text-3xl
    
    `}
`;


const PictureContainer = styled.img`
  ${tw`
  w-full
  h-full
  object-contain
  p-2
  
  sm:w-40
  md:w-40
  lg:w-60
  xl:w-80
  
    `}
`;

const ContentContainer = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  ${tw`
    px-3
    text-base
    text-white
    font-normal
    justify-center
    text-center
    overflow-hidden
    h-6
    w-full
    pb-20
   
   sm:text-xl
   lg:text-base
   xl:text-2xl
   xl:font-semibold
   xl:pb-24
   
   `}
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    pt-2
    pb-4
    w-full
    
    `}
`;

const Date = styled.div`
  ${tw`
    flex
    justify-center
    font-bold
    font-normal
    text-sm
    bottom-6
    left-6
    text-white
    
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
    text-white
    hover:bg-pink-500
    
    hover:bg-pink-500
    cursor-pointer
    
    sm:h-8
    sm:w-20
    md:right-4
    `}
`;

export interface IProps {
  posts: any;
}

const CloudCard: React.FC<IProps> = ({ posts }) => {
console.log(posts)

  return (
    <>
      <CloudCardContainer>
        <CloudCardStyle>
            <PictureContainer src={posts?.img} />

          <CardContainer>
              <CardStyle>
                <Title>
                  {posts?.title}
                </Title>
                <ContentContainer>
                  {posts?.content}
                </ContentContainer>
                <Date>
                  {posts?.TimeStamp.slice(0, -10)}
                </Date>
                <ButtonContainer>
                  <Link key={posts?.id} href={`Cloud/${posts?.id}`}>
                    <ButtonClick>
                        Click
                    </ButtonClick>
                  </Link>
                </ButtonContainer>

              </CardStyle>
            </CardContainer>
        </CloudCardStyle>
      </CloudCardContainer>
    </>
  );
};
export default CloudCard;

export const getStaticProps = async () => {
  const { data: blogPost } = await supabase.from("BlogPosts").select("id");
  return {
    props: {
      blogPost
    }
  };
};
