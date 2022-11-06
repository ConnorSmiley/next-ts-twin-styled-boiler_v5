import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";


const HeaderBg = styled.div`
  ${tw`
    w-screen
    h-20
    bg-blue-900
    `}
`;


const HeaderStyle = styled.div`
  ${tw`
    w-auto
    h-full
    flex
    text-white
    justify-center
    font-bold
    items-center
    uppercase
    `}
`;

const Header: NextPage = () => {

  return (
    <>
      <HeaderBg>
        <HeaderStyle>

          <Link href="/">
            Home
          </Link>
          <Link href="/">
            Design
          </Link>
          <Link href="/">
            Programming
          </Link>
          <Link href="/">
            I.T.
          </Link>
          <Link href="/">
            Photos
          </Link>
          <Link href="/">
            about
          </Link>

        </HeaderStyle>
      </HeaderBg>
    </>
  );
};

export default Header;
