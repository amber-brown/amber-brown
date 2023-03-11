import React from "react"

import { rhythm } from "../utils/typography"

import "../styles/style.css"

import Header from "./header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <React.Fragment>
        <Header rootPath={rootPath} location={location} title={title} />
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
      </React.Fragment>
    )
  }
}

export default Layout
