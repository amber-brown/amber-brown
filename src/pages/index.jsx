import React from 'react';
import styled from 'styled-components';

import Bio from '../components/Bio';
import LatestPosts from '../components/LatestPosts';
import Layout from '../components/Layout';

const HomeContainer = styled.div`
  margin: 16px;

  @media only screen and (min-width: 1050px) {
      margin: 0 5%;
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
`;

const SectionContainer = styled.div`
  margin: 0 16px 16px 16px;
  max-width: 500px;

  @media only screen and (min-width: 1050px) {
      margin: 0;
  }
`;

function BlogIndex() {
  return (
    <Layout>
      <HomeContainer>
        <SectionContainer>
          <Bio />
        </SectionContainer>
        <LatestPosts />
      </HomeContainer>
    </Layout>
  );
}

export default BlogIndex;
