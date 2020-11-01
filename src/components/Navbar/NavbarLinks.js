import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled((props) => <Link {...props} />)`
  margin: 0 0.5em;
  ${({ theme }) => `color: ${theme.palette.text.primary}`};
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5em 0.25em;

  &:hover {
    ${({ theme }) => `
      background-color: ${theme.palette.text.secondary};
      color: ${theme.palette.text.tertiary} !important;
    `};
    border-radius: 0.25em;
    text-decoration: none;
  }
  &:visited {
    color: inherit;
  }
`;

const NavbarLinks = ({ links, className }) =>
  links.map((link) => (
    <>
      <StyledLink to={link.to} className={className}>
        {link.text}
      </StyledLink>
    </>
  ));

export default NavbarLinks;
