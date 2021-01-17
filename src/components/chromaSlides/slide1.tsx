import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide1 = () => {
  const data = useStaticQuery(graphql`
    query {
      chromaSlide1: file(relativePath: { eq: "chromaSlides/slide1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.chromaSlide1?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return (
    <Img style={{ flex: 1 }} fluid={data.chromaSlide1.childImageSharp.fluid} />
  )
}
export default Slide1
