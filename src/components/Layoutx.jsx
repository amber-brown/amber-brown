/* eslint-disable react/prop-types */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Headerx';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

const Content = styled.main`
  margin-top: 80px;
  padding-bottom: 16px;
`;

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
      <footer />
    </ThemeProvider>
  );
}

export default Layout;
