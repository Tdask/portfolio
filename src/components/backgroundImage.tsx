import React, { useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackgroundImage = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "kitchenBG.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {data?.backgroundImage?.childImageSharp?.fluid ? (
        <Img
          // style={{ flex: 1 }}
          fluid={data.backgroundImage.childImageSharp.fluid}
          {...props}
        />
      ) : (
        <p>No Image </p>
      )}
    </>
  )
}

export default BackgroundImage
