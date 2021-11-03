import React from "react";
import { GiDrumKit } from "react-icons/gi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <Logo>
          <i>
            <GiDrumKit />
          </i>
          <h3>rectanglehihat</h3>
        </Logo>

        <Menu>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Bookings</a>
          </li>
        </Menu>

        <Icon>
          <li>
            <AiOutlineTwitter />
          </li>
          <li>
            <AiOutlineInstagram />
          </li>
        </Icon>

        <Hamburger href="#">
          <GiHamburgerMenu />
        </Hamburger>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #274472;
  color: var(--text-color);
  font-family: source sans pro;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
`;

// ==========홈아이콘
const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  & > i {
    /* width: 2rem;
    height: 2rem; */
    font-size: 2rem;
    color: darksalmon;
    padding-right: 4px;
  }
`;

// ==========메뉴
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  & > li {
    padding: 1em 2em;
    justify-content: space-between;

    :hover {
      background-color: darksalmon;
      border-radius: 5px;
    }
  }

  & > li > a {
    text-decoration: none;
    color: var(--text-color);
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    flex-direction: column;
    align-items: center;
    width: 100%;

    > li {
      width: 90%;
      text-align: center;

      :hover {
        background-color: darksalmon;
        border-radius: 5px;
      }
    }
  }
`;

// ==========소셜아이콘
const Icon = styled.ul`
  display: flex;
  padding: 0;
  font-size: 1.3rem;

  & > li {
    list-style: none;
    padding: 0.5em;
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    justify-content: center;
    width: 100%;
  }
`;

// ==========햄버거
const Hamburger = styled.a`
  display: none;
  color: var(--text-color);

  position: absolute;
  right: 2rem;
  top: 1rem;
  font-size: 1.5rem;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default App;
