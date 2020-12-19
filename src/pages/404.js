import React from "react";
import styled from "styled-components";
import Layout from "src/components/Layout";

import Heading from "@atomic/atoms/Heading";
import Paragraph from "@atomic/atoms/Paragraph";

const IndexWrapper = styled.main`
  padding: 50px;
`;

export default () => {
  return (
    <Layout>
      <IndexWrapper>
        <Heading size={1}>404</Heading>
        <Heading size={2}>Page not found</Heading>
        <Paragraph>Oops, sorry! That page doesn't exist...</Paragraph>
      </IndexWrapper>
    </Layout>
  );
};
