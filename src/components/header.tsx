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
  background: ${color.xiketic};
  // background-image: url(https://pbs.twimg.com/media/Es5iQO0W4AAbGeU?format=png&name=large);
`
const StyledLinksContainer = styled.div`
  padding: 1rem 3.0875rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

const StyledPageLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLinksContainer>
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
      <StyledPageLinks>
        {navLinks.menu.map((item, i) => {
          return (
            <h3
              key={item.name}
              style={{
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
      </StyledPageLinks>
    </StyledLinksContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
