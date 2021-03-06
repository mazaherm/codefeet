import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import NavbarLinks from "@components/Navbar/NavbarLinks";
import Logo from "@components/Logo";

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  margin: 0 auto 2em 0;
  z-index: 2;
  align-self: center;
  ${({ theme }) => `
    border-bottom: 2px solid ${theme.palette.text.primary};
    color: ${theme.palette.text.primary};
  `};

  @media (max-width: 768px) {
    position: sticky;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const NavBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    ${({ theme }) => `background-color: ${theme.palette.background.primary}`};
    transition: all 0.3s ease-in;
    top: 15vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const Navbar = ({ links, hasBottomBorder }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Container>
      <Navigation hasBottomBorder={hasBottomBorder}>
        {navbarOpen ? (
          <NavContainer>
            <Logo />
            <NavBox>
              <NavbarLinks links={links} />
            </NavBox>
          </NavContainer>
        ) : (
          <NavContainer>
            <Logo />
            <NavBox open>
              <NavbarLinks links={links} />
            </NavBox>
          </NavContainer>
        )}
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
      </Navigation>
    </Container>
  );
};

Navbar.propTypes = {
  links: PropTypes.shape({}).isRequired,
  bottomBorder: PropTypes.bool,
};

Navbar.defaultProps = {
  bottomBorder: false,
};

export default Navbar;
