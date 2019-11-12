import React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Header extends React.Component {
  render() {
    const { location, rootPath, title } = this.props

    return (
      <header className="main-header">
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <div>
            <h3
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h3>
            <p>A personal blog for web development</p>
            <nav>
              <Link to="/">Blog</Link>
              <Link to="/showcase" style={{ marginLeft: 10 }}>
                Showcase
              </Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
