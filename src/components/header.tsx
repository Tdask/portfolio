import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { color } from "./styles/color"
import { navLinks } from "../../config"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background:
        "linear-gradient(90deg, hsla(155, 23%, 71%, 1) 0%, hsla(302, 17%, 32%, 1) 100%)",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `5 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {navLinks.menu.map((item, i) => {
        return <h1 style={{ color: color.mango }}>{item.name}</h1>
      })}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
