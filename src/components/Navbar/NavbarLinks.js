import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(props => <Link {...props} />)`
  margin: 0 0.5em;
  color: $text-primary;
  font-size: 1.125em;
  font-weight: 600;
  text-decoration: none;
  padding: 0.50em 0.25em;

  &:hover {
    border-radius: 0.25em;
    color: #f5f6fa !important;
    background-color: #5a78f1;
  }
  &:visited {
    color: inherit;
  }
`;

const NavbarLinks = ({ links }) => (
  links.map(link => (
    <>
      <StyledLink to={link.to}>{link.text}</StyledLink>
    </>
  ))
)

export default NavbarLinks;
