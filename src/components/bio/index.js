/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./style.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio__container">
      <div className="bio__text-container">
        <h2>Hi, I'm Amber Brown</h2>
        <p className="bio__subheading">A Front-End Developer</p>
        <p className="bio__text">Welcome to my blog and digital playground.</p>
      </div>
    </div>
  )
}

export default Bio
