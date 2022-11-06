import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";


const NavbarBG = styled.div`
  ${tw`
    w-screen
    h-20
    bg-black
    `}
`;

const NavbarStyle = styled.div`
  ${tw`
    w-full
    h-full
    pl-[50%]
    pr-[1%]
    `}
`;

const NavbarText = styled.div`
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
  
 hidden lg:flex
    `}
`;

const Navbar: NextPage = () => {

  return (
    <>
      <NavbarBG>
        <NavbarStyle>
          <HamburgerMenu />
          <NavbarText>
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
          </NavbarText>
        </NavbarStyle>
      </NavbarBG>
    </>
  );
};

export default Navbar;
