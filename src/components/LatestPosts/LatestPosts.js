import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "../seo";
import './latestPosts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const LatestPosts = () => {
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
    `)

    const posts = data.allMarkdownRemark.edges
    console.log(posts)

    return (
        <div>
         <SEO title="Latest posts" />
         <h4 style={{marginLeft: "16px"}}>Latest Posts</h4>
        {posts.map((post) => {
            const {fields, frontmatter, excerpt} = post.node;
            return (
                <div className="blog-post__container">
                <Link style={{ boxShadow: `none` }} to={fields?.slug}>
                <article className="blog-post" key={fields.slug}>
                    <header className="blog-post__header">
                        <p className="blog-post__date colour-secondary">{frontmatter.date}</p>
                        <h3 className="blog-post__title">
                                {frontmatter.title}
                        </h3>
                    </header>
                    <section>
                        <p className="blog-post__description">{frontmatter.description || excerpt}</p>
                    </section>
                    <div className="blog-post__arrow-container">
                        <FontAwesomeIcon icon={faArrowRightLong} className="colour-secondary" />
                    </div>
                </article>
                  </Link>
                  </div>
            )
        })}
        <Link to="/blog"><p style={{marginLeft: "16px"}}>More...</p></Link>
        </div>
    )
}

export default LatestPosts;