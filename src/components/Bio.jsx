import React from 'react';
import styled from 'styled-components';
import GihubLogo from './LogoGithub';
import LinkedinLogo from './LogoLinkedin';
import Button from '../styledComponents/Button';

const BioContainer = styled.div`
  margin: '0 16px 24px 16px'
`;

const BioText = styled.h2`
    font-size: 36px;
    margin-bottom: 6px;
`;

const LightText = styled.span`
    font-weight: 400;
    opacity: 0.9;
`;

const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Logo = styled.div`
  margin-right: 8px;
`;

const IntroductionText = styled.p`
  color: ${(props) => props.theme.colors.secondary}
`;

function Bio() {
  return (
    <BioContainer>
      <BioText>
        <span>HEY! </span>
        <span>I&apos;m Amber,</span>
        {' '}
        <LightText>a</LightText>
      </BioText>
      <h1>
        SOFTWARE ENGINEER
        <br />
        <LightText>based in </LightText>
        <b>LONDON</b>
      </h1>
      <IntroductionText>
        Javascript / typescript engineer with experience in building
        <br />
        solutions for mobile and web
      </IntroductionText>
      <LogoContainer>
        <Logo>
          <a href="https://github.com/amber-brown" label="github"><GihubLogo /></a>
        </Logo>
        <a href="https://www.linkedin.com/in/amberbrown0/" label="linkedin"><LinkedinLogo /></a>
      </LogoContainer>
      <Button buttonText="Find out more" />
    </BioContainer>
  );
}

export default Bio;
