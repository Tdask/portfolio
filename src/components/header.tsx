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
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
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
      <div style={{ display: "flex", justifyContent: "space-around", flex: 1 }}>
        {navLinks.menu.map((item, i) => {
          return (
            <h1
              key={item.name}
              style={{ color: color.mango, textDecoration: `none` }}
            >
              <Link
                to={`/${item.name}`}
                style={{ textDecoration: "none", color: color.mango }}
              >
                {item.name}
              </Link>
            </h1>
          )
        })}
      </div>
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
