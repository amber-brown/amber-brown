import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
      <header className="main-header">
        <div>
          <nav className="nav">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/blog" className="nav-link">
              BLOG
            </Link>
            <Link to="/showcase" className="nav-link">
              SHOWCASE
            </Link>
          </nav>
        </div>
      </header>
    )
}

export default Header
