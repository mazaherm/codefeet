import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarLinks from "@components/Navbar/NavbarLinks";
import { mainFooterLinks } from "@config/constants";
import styled from "styled-components";
import FooterIcons from "./FooterIcons";
import { mainSocialLinks } from "@config/constants";
import FooterLinks from "@components/Footer/FooterLinks";

const FooterBox = styled(Row)`
  border-top: 2px black solid;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
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

const FooterCopyright = styled.div`
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

const FooterLicense = styled.div`
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
          <FooterCopyright>
            &copy; {date.getFullYear()} Codefeet
          </FooterCopyright>
          <FooterLicense>Licensed under CC BY 4.0</FooterLicense>
        </FooterTextCol>
        <FooterLinkCol>
          <FooterLinkText>
            <FooterLinkStyle>
              <NavbarLinks links={mainFooterLinks} />
            </FooterLinkStyle>
          </FooterLinkText>
          <SocialLink>
            <FooterIcons />
            <FooterLinks links={mainSocialLinks} />
          </SocialLink>
        </FooterLinkCol>
      </FooterBox>
    </Container>
  );
};

export default Footer;
