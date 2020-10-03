import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Header } from '../molecules/Header';

const AppStyle = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyle>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyle>
  );
}
