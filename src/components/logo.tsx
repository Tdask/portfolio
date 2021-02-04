import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const ChromaIcon = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      chromaLogo: file(relativePath: { eq: "logos/signetsmall.png" }) {
        childImageSharp {
          fluid(maxWidth: 170) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.chromaLogo?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <Img style={{ width: 90 }} fluid={data.chromaLogo.childImageSharp.fluid} />
  )
}
