import React from 'react';
import { styled } from 'styled-components';

const ButtonComp = styled.button`
  border: 2px solid #e4e4dc;
  border-radius: 6px;
  color: #e4e4dc;
  padding: 10px 20px;
  font-size: 16px;
  background: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

function Button() {
  return (<ButtonComp>Button</ButtonComp>);
}

export default Button;
