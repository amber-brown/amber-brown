/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PostTile from '../components/PostTile';

import Layout from '../components/Layout';

const Title = styled.h1`
  margin-left: 12px;
`;

function BlogIndex({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title={siteTitle}>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '900px',
          padding: '0 16px',
        }}
      >
        <div>
          <Title>Blog</Title>
          {posts.map(({ frontmatter, fields, excerpt }) => {
            const title = frontmatter.title || fields.slug;
            return (
              <PostTile
                key={fields.slug}
                link={fields.slug}
                date={frontmatter.date}
                title={title}
                description={frontmatter.description || excerpt}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
