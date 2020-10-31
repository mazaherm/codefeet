import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  margin-right: 5px;
  color: #2f3640;
  padding: 0.5em 0.25em;

  &:hover {
    border-radius: 0.25em;
    color: #f5f6fa;
    background-color: #5a78f1;
  }
  &:visited {
    color: #2f3640;
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
