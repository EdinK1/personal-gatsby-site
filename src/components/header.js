import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="main-header">
    <nav>
      <ul>
        <li>
          <Link to="/#">Home</Link>
        </li>
        <li>
          <Link to="/#showcase">Work</Link>
        </li>
        <li>
          <Link to="/#skills">Skills</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
