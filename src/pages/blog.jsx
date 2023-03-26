/* eslint-disable react/prop-types */
import React from 'react';

import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';

function BlogIndex({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title={siteTitle}>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(25),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div>
          <h2>Blog</h2>
          {posts.map(({ frontmatter, fields, excerpt }) => {
            const title = frontmatter.title || fields.slug;
            return (
              <article key={fields.slug}>
                <header>
                  <h4>
                    <Link to={fields.slug}>{title}</Link>
                  </h4>
                </header>
                <section>
                  <p>{frontmatter.description || excerpt}</p>
                </section>
              </article>
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
