import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSiteMetadata } from "@hooks/useSiteMetadata";

import Image from "@atomic/atoms/Image";
import CodeFeetLogo from "@assets/cf.svg";

const StyledImage = styled(Image)`
  height: 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5em;

  &:hover {
    text-decoration: none;
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const LogoBoxText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledHeading = styled.h1`
  ${({ theme }) => `color: ${theme.palette.text.secondary};`};
  margin: 0;
  text-transform: capitalize;
  line-height: 1;
`;

const StyledDescriptionText = styled.p`
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
  margin: 0;
  ${({ theme }) => `color: ${theme.palette.text.primary};`};
  width: 300px;
  font-weight: 300;
  font-style: italic;
`;

const Logo = () => {
  const { title, description } = useSiteMetadata();
  return (
    <StyledLink to="/">
      <LogoBox>
        <StyledImage src={CodeFeetLogo} alt={title} />
        <LogoBoxText>
          <StyledHeading>{title}</StyledHeading>
          <StyledDescriptionText>{description}</StyledDescriptionText>
        </LogoBoxText>
      </LogoBox>
    </StyledLink>
  );
};

export default Logo;
