import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide1 = () => {
  const data = useStaticQuery(graphql`
    query {
      TTSlide1: file(relativePath: { eq: "tokentaxSlides/harvestSlide.png" }) {
        childImageSharp {
          fluid(maxWidth: 969) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.TTSlide1?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.TTSlide1.childImageSharp.fluid} />
}
export default Slide1
