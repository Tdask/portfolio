/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const StyledLayoutDiv = styled.div`
  padding: 1rem 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledLayoutDiv>
        {/* <div
        style={{
          background: "orange",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "column",
        }}
      > */}
        <main>
          {children}
          {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
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
