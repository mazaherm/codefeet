import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '@hooks/useSiteMetadata';
import Header from '@atomic/molecules/Header';
import Navbar from '@components/Navbar';

import { mainNavLinks } from '@config/constants';

import "@styles/main.scss";

const AppStyle = styled.main`
  width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyle>
      <Navbar links={mainNavLinks} hasBottomBorder />
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyle>
  );
}

export default Layout;
