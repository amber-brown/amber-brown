import React from "react"

import Bio from "../components/bio"
import Header from '../components/header'
import LatestPosts from '../components/LatestPosts/LatestPosts'

const BlogIndex = () => {
    return (
      <>
        <Header />
        <div className="home-container">
            <Bio />
            <LatestPosts />
        </div>
      </>
    )
}

export default BlogIndex
