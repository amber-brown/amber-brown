import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  font-size: 16px;
  background: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    transition: width 0.3s ease-out;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: ${(props) => props.theme.colors.background};
  }
`;

function Button({ buttonText, type = 'button' }) {
  return (
    <StyledButton type={type}>{buttonText}</StyledButton>
  );
}

export default Button;
