import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import FooterIcons from "./FooterIcons";

import NavbarLinks from "@components/Navbar/NavbarLinks";
import SocialIcons from "@components/SocialIcons";

import { mainFooterLinks } from "@config/constants";
import links from "@config/links";

import { SiNetlify, SiGatsby } from "react-icons/si";

const { CCLICENCE, GATSBY, NETLIFY } = links;

const FooterBox = styled(Row)`
  border-top: 2px black solid;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const FooterMiddle = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

const PoweredByIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterTextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterText = styled.div`
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

const FooterLicense = styled.a`
  font-size: 13px;
`;

const FooterLinkCol = styled(Col)`
  font-size: 14px;
  margin-top: 10px;
  padding-bottom: 20px;
`;

const FooterLinkText = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const FooterLinkStyle = styled.div`
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
    color: $background-primary !important;
    transition: ease-in 0.1s;
  }
`;

const SocialLink = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Footer = () => {
  const date = new Date();

  return (
    <Container>
      <FooterBox>
        <FooterTextCol>
          <FooterText>&copy; {date.getFullYear()} Codefeet</FooterText>
          <FooterLicense href={CCLICENCE} target="_blank">
            Licensed under CC BY 4.0
          </FooterLicense>
        </FooterTextCol>
        <FooterMiddle>
          <FooterText>Powered by</FooterText>
          <PoweredByIcons>
            <SocialIcons link={NETLIFY} iconComponent={<SiNetlify />} />
            <SocialIcons link={GATSBY} iconComponent={<SiGatsby />} />
          </PoweredByIcons>
        </FooterMiddle>
        <FooterLinkCol>
          <FooterLinkText>
            <FooterLinkStyle>
              <NavbarLinks links={mainFooterLinks} />
            </FooterLinkStyle>
          </FooterLinkText>
          <SocialLink>
            <FooterIcons />
          </SocialLink>
        </FooterLinkCol>
      </FooterBox>
    </Container>
  );
};

export default Footer;
