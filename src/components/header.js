import React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Header extends React.Component {
  render() {
    const { location, rootPath, title } = this.props

    return (
      <header className="main-header">
        <div class="main-header__background">
          <svg
            width="1187"
            height="395"
            viewBox="0 0 1187 395"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1187 0H0C19.1733 12.9508 106.325 70.3045 189.99 99.9063C273.655 129.508 402.639 154.485 545.567 163.735C688.495 172.986 786.104 174.836 936.004 227.564C1055.92 269.747 1153.3 356.764 1187 395V0Z"
              fill="rgb(208, 199, 186)"
            />
          </svg>
        </div>
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
}

export default Header
