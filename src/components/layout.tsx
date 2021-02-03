import React, { createContext, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { color } from "./styles/color"
import Header from "./header"
import "./layout.css"
// import "./assets/css/fonts.css"
import "@fontsource/cousine"
import "@fontsource/ubuntu-mono"
import "@fontsource/open-sans"
import "@fontsource/press-start-2p"

const zenSrc = require("../images/zenAnsi.png")

const StyledLayoutDiv = styled.div`
  padding: 3rem 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;
  // background-image: url(https://pbs.twimg.com/media/Es5iQO0W4AAbGeU?format=png&name=large);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* {data.zenImage.childImageSharp.fixed ? (
        <Img fixed={data.zenImage.childImageSharp.fixed} />
      ) : (
        "no data"
      )} */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledLayoutDiv>
        <main>
          {children}
          <footer
            style={{
              marginTop: `2rem`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            © {new Date().getFullYear()} Logan Takahashi
          </footer>
        </main>
        {/* </div> */}
      </StyledLayoutDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
