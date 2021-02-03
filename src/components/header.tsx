import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { color } from "./styles/color"
import { navLinks } from "../../config"

const activeStyle = {
  color: color.turquoise,
}

const StyledHeader = styled.header`
  // background: linear-gradient(
  //   90deg,
  //   hsla(186, 33%, 94%, 1) 0%,
  //   hsla(216, 41%, 79%, 1) 100%
  // );
  background: ${color.xiketic};
  // background-image: url(https://pbs.twimg.com/media/Es5iQO0W4AAbGeU?format=png&name=large);
  // background-position: right;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div
      style={{
        // margin: `5 auto`,
        // maxWidth: 960,
        padding: `1rem 3.0875rem`,
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0, flex: 4 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: `none`,
          }}
          activeStyle={activeStyle}
        >
          {siteTitle}
        </Link>
      </h3>
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
            <h3
              key={item.name}
              style={{
                color: color.mango,
                textDecoration: `none`,
                marginBottom: 0,
              }}
            >
              <Link
                to={`/${item.name}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: 10,
                }}
                activeStyle={activeStyle}
              >
                {item.name}
              </Link>
            </h3>
          )
        })}
      </div>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
