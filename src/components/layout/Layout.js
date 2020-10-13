import React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';

import { mainNavLinks } from '@config/constants';

import "@styles/main.scss";

const AppStyle = styled.main`
  width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <AppStyle>
      <Navbar links={mainNavLinks} hasBottomBorder />
      {children}
    </AppStyle>
  );
}

export default Layout;
