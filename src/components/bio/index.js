/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./style.css"

const Bio = () => {
  return (
    <div className="bio__container">
      <div className="bio__text-container">
        <h2>Hi, I'm Amber Brown</h2>
        <p className="bio__subheading">A UK based full stack javascript developer</p>
      </div>
    </div>
  )
}

export default Bio
