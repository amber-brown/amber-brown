import React from "react"

import { rhythm } from "../utils/typography"

import "../styles/style.css"

import Header from "./header"

const Layout = ({ children }) => {
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <>
        <Header />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(25),
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
          <footer></footer>
        </div>
      </>
    )
}

export default Layout
