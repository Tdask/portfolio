import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide3 = () => {
  const data = useStaticQuery(graphql`
    query {
      stockSlide3: file(relativePath: { eq: "stockSlides/stockSlide3.png" }) {
        childImageSharp {
          fluid(maxWidth: 969) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.stockSlide3?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.stockSlide3.childImageSharp.fluid} />
}
export default Slide3
