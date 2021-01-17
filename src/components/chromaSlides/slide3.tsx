import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide3 = () => {
  const data = useStaticQuery(graphql`
    query {
      chromaSlide3: file(relativePath: { eq: "chromaSlides/slide3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.chromaSlide3?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return (
    <Img style={{ flex: 1 }} fluid={data.chromaSlide3.childImageSharp.fluid} />
  )
}

export default Slide3
