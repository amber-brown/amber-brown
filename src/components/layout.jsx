/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/style.css';
import Header from './Header';
import theme from '../utils/theme';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <footer />
    </ThemeProvider>
  );
}

export default Layout;
