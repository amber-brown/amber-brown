import React from 'react';
import styled from 'styled-components';

import Bio from '../components/Bio';
import LatestPosts from '../components/LatestPosts';
import Layout from '../components/Layout';

const HomeContainer = styled.div`
  @media only screen and (min-width: 1050px) {
      margin: 0 5%;
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
`;

function BlogIndex() {
  return (
    <Layout>
      <HomeContainer>
        <Bio />
        <LatestPosts />
      </HomeContainer>
    </Layout>
  );
}

export default BlogIndex;
