import React from "react";
import SEO from "react-seo-component";
import styled from "styled-components";
import Layout from "@components/Layout";
import { useSiteMetadata } from "@hooks/useSiteMetadata";

import Heading from "@atomic/atoms/Heading";
import Paragraph from "@atomic/atoms/Paragraph";
import Image from "@atomic/atoms/Image";
import List from "@atomic/atoms/List";
import { Col, Row } from "react-bootstrap";

import SocialIcons from "@components/SocialIcons";

import links from "@config/links";
import { myTechStack } from "@config/constants";

import mazahermuraj from "@assets/mazahermuraj.jpg";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const { GITHUB, LINKEDIN, MEDIUM } = links;

const IndexWrapper = styled.main``;

const StyledRow = styled(Row)`
  margin: 15px 0;
`;

const StyledBox = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

export default () => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    githubUsername,
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={title}
        description={description || `A little about Mazaher’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        githubUsername={githubUsername}
      />
      <IndexWrapper>
        <Heading size={2}>About me</Heading>
        <Paragraph>
          My name is Mazaher Muraj. I'm a London based software engineer who
          loves working with front end technologies. In this blog I write about
          the different technologies that I have used in both my professional
          and personal development journey.
        </Paragraph>
        <StyledRow>
          <Col lg={4}>
            <Image src={mazahermuraj} alt="Mazaher Muraj" width="200px" />
          </Col>
          <Col>
            <Heading size={3}>Some of the Tech Stack I like to Use:</Heading>
            <List listType="ul" listItems={myTechStack} />
            <Heading size={3}>Connect with or follow me on:</Heading>
            <StyledBox>
              <SocialIcons link={LINKEDIN} iconComponent={<FaLinkedin />} />
              <SocialIcons link={MEDIUM} iconComponent={<FaMedium />} />
              <SocialIcons link={GITHUB} iconComponent={<FaGithub />} />
            </StyledBox>
          </Col>
        </StyledRow>
      </IndexWrapper>
    </Layout>
  );
};
