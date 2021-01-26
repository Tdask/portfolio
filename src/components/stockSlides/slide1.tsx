import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide1 = () => {
  const data = useStaticQuery(graphql`
    query {
      stockSlide1: file(relativePath: { eq: "stockSlides/stockSlide1.png" }) {
        childImageSharp {
          fluid(maxWidth: 969) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.stockSlide1?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.stockSlide1.childImageSharp.fluid} />
}
export default Slide1
