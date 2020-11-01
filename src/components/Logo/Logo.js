import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSiteMetadata } from "@hooks/useSiteMetadata";

import Image from "@components/atomic/atoms/Image";
import codefeetLogo from "@images/cf.svg";

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

const Logo = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Link to="/" className="logo-link">
      <LogoBox>
        <Image src={codefeetLogo} alt={title} className="logo" />
        <LogoBoxText>
          <h1 className="logo-title">{title}</h1>
          <p className="logo-desc">{description}</p>
        </LogoBoxText>
      </LogoBox>
    </Link>
  );
};

export default Logo;
