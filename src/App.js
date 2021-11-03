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
  color: white;
  font-family: source sans pro;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > i {
    /* width: 2rem;
    height: 2rem; */
    font-size: 2rem;
    color: darksalmon;
    padding: 4px;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  & > li {
    padding: 0.5em;
    justify-content: space-between;

    :hover {
      background-color: darksalmon;
      border-radius: 5px;
    }
  }

  & > li > a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    > li {
      width: 100%;
      text-align: center;
    }
  }
`;

const Icon = styled.ul`
  display: flex;
  padding: 0;
  font-size: 1.3rem;

  & > li {
    list-style: none;
    padding: 0.5em;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Hamburger = styled.a`
  display: none;
  color: white;

  position: absolute;
  right: 2rem;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default App;
