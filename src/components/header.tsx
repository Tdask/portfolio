import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { color } from "./styles/color"
import { navLinks } from "../../config"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: color.gradient2,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        // margin: `5 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0, flex: 4 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flex: 1,
          // background: "green",
        }}
      >
        {navLinks.menu.map((item, i) => {
          return (
            <h1
              key={item.name}
              style={{ color: color.mango, textDecoration: `none` }}
            >
              <Link
                to={`/${item.name}`}
                style={{
                  textDecoration: "none",
                  color: color.eggShell,
                  marginLeft: 10,
                }}
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
