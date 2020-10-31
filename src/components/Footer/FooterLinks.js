import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  margin: 0 0.5em;
  color: $text-primary;
  font-size: 1.125em;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5em 0.25em;

  &:hover {
    border-radius: 0.25em;
    color: #f5f6fa;
    background-color: #5a78f1;
  }
  &:visited {
    color: inherit;
  }
`;

const FooterLinks = ({ links, className }) =>
  links.map((link) => (
    <>
      <StyledIcon to={link.to} className={className}>
        {link.icon}
      </StyledIcon>
    </>
  ));

export default FooterLinks;
