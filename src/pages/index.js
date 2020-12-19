import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "react-seo-component";

import { Container, Row, Col } from "react-bootstrap";

import Layout from "./components/Layout";

import { useSiteMetadata } from "@hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

const StyledContainer = styled(Container)`
  ${({ theme }) => `border-bottom: 1px solid ${theme.palette.text.secondary2}`};
  padding: 0 0 15px 0;
  margin: 15px 0;
  :last-child {
    border-bottom: none;
  }
`;

const StyledImage = styled(Img)`
  max-width: 250px;
  width: 100%;
`;

const StyledColumn = styled(Col)``;
const StyledImageContainer = styled(Col)`
  @media (max-width: 576px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const StyledHeading = styled.h2`
  ${({ theme }) => `color: ${theme.palette.text.primary}`};
  font-weight: 700;
`;

const StyledExcerpt = styled.p`
  ${({ theme }) => `color: ${theme.palette.text.secondary2}`};
`;

const StyledDate = styled.p`
  margin: 0;
  font-size: 13px;
  ${({ theme }) => `color: ${theme.palette.text.secondary2}`};
`;

export default ({ data }) => {
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
        description={description || `nothing to see here’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        githubUsername={githubUsername}
      />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <StyledContainer>
            <Row style={{ flexWrap: "nowrap" }}>
              <StyledColumn lg={8} xs={12}>
                <StyledLink to={fields.slug} key={id}>
                  <StyledHeading>{frontmatter.title}</StyledHeading>
                  <StyledExcerpt>{excerpt}</StyledExcerpt>
                </StyledLink>
                <StyledDate>{frontmatter.date}</StyledDate>
              </StyledColumn>
              <StyledImageContainer>
                {!!frontmatter.cover ? (
                  <StyledImage
                    sizes={frontmatter.cover.childImageSharp.sizes}
                  />
                ) : null}
              </StyledImageContainer>
            </Row>
          </StyledContainer>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "D MMM YYYY")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
