/* eslint-disable react/prop-types */
import React from 'react';

import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

function BlogIndex({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title={siteTitle}>
      <div className="blog-post__container">
        <h2>Blog</h2>
        {posts.map(({ frontmatter, fields, excerpt }) => {
          const title = frontmatter.title || fields.slug;
          return (
            <article className="blog-post" key={fields.slug}>
              <header className="blog-post__header">
                <h4 className="blog-post__title">
                  <Link style={{ boxShadow: 'none' }} to={fields.slug}>
                    {title}
                  </Link>
                </h4>
              </header>
              <section>
                <p
                  className="blog-post__description"

                >
                  {frontmatter.description || excerpt}

                </p>
              </section>
            </article>
          );
        })}
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
