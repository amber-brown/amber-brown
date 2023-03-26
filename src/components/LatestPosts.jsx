import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h4`
  margin-left: 16px;
`;

const PostContainer = styled.div`
  border-radius: 10px;
  border: 2px solid transparent; 
  padding: 16px;
  width: 100%;

  &:hover {
    border: 2px solid #6ce1cc; 
    box-shadow: 0px 2px 10px rgb(0 0 0 / 24%); 
  }
`;

const PostDate = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary}
`;

const PostTitle = styled.h3`
  margin-bottom: 8px;
`;

const PostDescription = styled.p`
  margin-bottom: 0;
  font-weight: 400;
`;

const PostArrowContainer = styled.div`
  margin-top: 16px;
`;

const Arrow = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.secondary}
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
          <PostContainer>
            <Link to={fields?.slug}>
              <artcile key={fields.slug}>
                <header>
                  <PostDate>{frontmatter.date}</PostDate>
                  <PostTitle>{frontmatter.title}</PostTitle>
                </header>
                <section>
                  <PostDescription>{frontmatter.description || excerpt}</PostDescription>
                </section>
                <PostArrowContainer>
                  <Arrow icon={faArrowRightLong} />
                </PostArrowContainer>
              </artcile>
            </Link>
          </PostContainer>
        );
      })}
      <Link to="/blog"><p style={{ marginLeft: '16px' }}>More...</p></Link>
    </div>
  );
}

export default LatestPosts;
