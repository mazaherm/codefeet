import React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import { mainNavLinks } from '@config/constants';

import "@styles/main.scss";

const AppStyle = styled.main`
  width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
    <Navbar links={mainNavLinks} hasBottomBorder />
    <AppStyle>
      {children}
    </AppStyle>
    <Footer />
    </>
  );
}

export default Layout;
