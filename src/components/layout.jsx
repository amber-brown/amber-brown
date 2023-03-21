/* eslint-disable react/prop-types */
import React from 'react';
import { rhythm } from '../utils/typography';
import '../styles/style.css';
import Header from './header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(25),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <footer />
      </div>
    </>
  );
}

export default Layout;
