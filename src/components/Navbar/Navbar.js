import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavbarLinks from '@components/Navbar/NavbarLinks';
import styled from 'styled-components';

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
  background-color: #f5f6fa;
  border-bottom: ${props => props.hasBottomBorder ? '2px solid #2f3640' : ''};

  @media (max-width: 768px) {	
    position: sticky;	
    height: 8vh;	
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
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

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
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const Navbar = ({ links, hasBottomBorder }) => {
  const [navbarOpen, setNavbarOpen ] = useState(false);

  return (
    <Navigation hasBottomBorder={hasBottomBorder}>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <NavContainer>
          <NavbarLinks links={links} />
        </NavContainer>
      ) : (
        <NavContainer open>
          <NavbarLinks links={links} />
        </NavContainer>
      )}
    </Navigation>
  )
}

Navbar.propTypes = {
  links: PropTypes.shape({}).isRequired,
  bottomBorder: PropTypes.bool,
}

Navbar.defaultProps = {
  bottomBorder: false,
}

export default Navbar;
