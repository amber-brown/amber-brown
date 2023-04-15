import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '../hooks/usewindowDimensions.ts';

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  height: 80px;
  width: 100%;
  position: relative;
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Navigation = styled.nav`
  padding-right: 16px;
`;

const NavigationLink = styled(Link)`
  margin-left: 28px;
  position: relative;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  &::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    z-index: 1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
    background: #383e41;
  }

  &:hover {
    color: #383e41;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
    transform: scaleX(1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.82, 0.94);
  }
`;

const Hamburger = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  cursor: pointer;
`;

function Nav({ isMobile, showMobileNav }) {
  if (!isMobile || (isMobile && showMobileNav)) {
    return (
      <Navigation>
        <NavigationLink to="/">HOME</NavigationLink>
        <NavigationLink to="/blog">BLOG</NavigationLink>
        <NavigationLink to="/showcase">SHOWCASE</NavigationLink>
      </Navigation>
    );
  }
}

function Header() {
  const { width } = useWindowDimensions();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const isMobile = () => width < 768;

  return (
    <HeaderContainer>
      {isMobile()
      && (<Hamburger icon={faBars} onClick={() => setShowMobileNav(!showMobileNav)} />)}
      <Nav isMobile={isMobile()} showMobileNav={isMobile() && showMobileNav} />
    </HeaderContainer>
  );
}

export default Header;
