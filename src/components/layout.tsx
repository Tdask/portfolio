import React, { createContext, ReactNode, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
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
`
type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
      </StyledLayoutDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
