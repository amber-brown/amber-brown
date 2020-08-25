import React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Header extends React.Component {
  render() {
    const { location, rootPath, title } = this.props
    return (
      <header className="main-header">
        <div>
          <nav>
            <Link to="/" className="nav-link nav-link--orange">
              BLOG
            </Link>
            <Link to="/showcase" className="nav-link nav-link--blue">
              SHOWCASE
            </Link>
            <Link to="/showcase" className="nav-link nav-link--green">
              ABOUT
            </Link>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
