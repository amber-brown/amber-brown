import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PostTile from './PostTile';

const Title = styled.h3`
  margin-left: 16px;
`;

function LatestPosts() {
  const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
                edges {
                    node {
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
        }
    `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Title>Latest Posts</Title>
      {posts.map((post) => {
        const { fields, frontmatter, excerpt } = post.node;
        return (
          <PostTile
            key={fields.slug}
            link={fields.slug}
            date={frontmatter.date}
            title={frontmatter.title}
            description={frontmatter.description || excerpt}
          />
        );
      })}
      <Link to="/blog"><p style={{ marginLeft: '16px' }}>More...</p></Link>
    </div>
  );
}

export default LatestPosts;
