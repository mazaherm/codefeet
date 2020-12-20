import React from "react";
import styled from "styled-components";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Theme from "@styles/theme";

import { mainNavLinks } from "@config/constants";

import "@styles/main.scss";

const AppStyle = styled.main`
  width: 800px;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const Layout = ({ children }) => {
  return (
    <Theme>
      <Navbar links={mainNavLinks} hasBottomBorder />
      <AppStyle>{children}</AppStyle>
      <Footer />
    </Theme>
  );
};

export default Layout;
