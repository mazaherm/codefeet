import React from "react";
import SEO from "react-seo-component";
import styled from "styled-components";
import Layout from "@components/Layout";
import { useSiteMetadata } from "@hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

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
      <IndexWrapper>About</IndexWrapper>
    </Layout>
  );
};
