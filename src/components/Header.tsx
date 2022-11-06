import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";


const HeaderBg = styled.div`
  ${tw`
    w-screen
    h-20
    bg-black
    opacity-80
    `}
`;

const HeaderStyle = styled.div`
  ${tw`
    w-full
    h-full
    pl-[50%]
    pr-[1%]
    `}
`;

const HeaderText = styled.div`
  ${tw`
  flex
  w-auto
  h-full
  justify-evenly
  text-white
  font-bold
  uppercase
  text-xl
  items-center
    `}
`;

const Header: NextPage = () => {

  return (
    <>
      <HeaderBg>
        <HeaderStyle>
          <HeaderText>
            <Link href="/">
              Home
            </Link>
            <Link href="/Design/">
              Design
            </Link>
            <Link href="/Coding">
              Coding
            </Link>
            <Link href="/Cloud">
              cloud
            </Link>
            <Link href="/Photos">
              Photos
            </Link>
            <Link href="/About">
              about
            </Link>
          </HeaderText>
        </HeaderStyle>
      </HeaderBg>
    </>
  );
};

export default Header;
