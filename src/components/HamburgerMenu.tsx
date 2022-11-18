import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";


const HamburgerMenuContainer = styled.div`
  min-width: 320px;
  ${tw`
    h-full
    lg:hidden flex
    z-50
    `}
`;

const HamburgerMenuStyle = styled.div`
  ${tw`
    right-4
    top-2
    `}
`;


const FaBarsIcon = styled(FaBars)`
  ${tw`
  absolute
  w-14
  h-14
    z-50
    text-white
    fill-current
    right-4
    top-2
    `}
`;

const CgCloseOIcon = styled(CgCloseO)`
  ${tw`
  absolute
    fill-current
    text-white
    h-16
    w-16
    z-50
    right-4
    top-2
    `}
`;


const HamburgerList = styled.div`
  ${tw`
  bg-black
   h-screen
   w-2/3
   tracking-widest
   right-0
   absolute
   flex
   flex-col
   font-extrabold
   uppercase
   items-center
   justify-evenly
   text-white
   text-3xl
   pb-40
   pt-[20%]
   z-10
   hover:text-red-500
   
   sm:text-5xl
   sm:pb-40
   sm:pt-20
   sm:font-extrabold
   sm:hover:text-blue-500
   
   md:text-6xl
   md:pb-40
   md:pt-20
   md:font-extrabold
   md:hover:text-green-500

    `}
`;

const HamburgerText = styled.div`
    ${tw`
    `}
`

export interface IHamburgerMenuProps {
}

const HamburgerMenu: React.FC<IHamburgerMenuProps> = () => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <HamburgerMenuContainer>
        <HamburgerMenuStyle
          onClick={openClose}
        >
          {open ? <CgCloseOIcon /> : <FaBarsIcon />}
          {open && (
            <HamburgerList>
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
            </HamburgerList>)
          }
        </HamburgerMenuStyle>
      </HamburgerMenuContainer>
    </>
  );
};

export default HamburgerMenu;
