import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 130px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const NavigationLink = styled(Link)`
  margin-left: 28px;
  position: relative;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
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

function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <NavigationLink to="/">HOME</NavigationLink>
        <NavigationLink to="/blog">BLOG</NavigationLink>
        <NavigationLink to="/showcase">SHOWCASE</NavigationLink>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
