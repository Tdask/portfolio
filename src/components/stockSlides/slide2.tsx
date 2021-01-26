import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide2 = () => {
  const data = useStaticQuery(graphql`
    query {
      stockSlide2: file(relativePath: { eq: "stockSlides/stockSlide2.png" }) {
        childImageSharp {
          fluid(maxWidth: 969) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.stockSlide2?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.stockSlide2.childImageSharp.fluid} />
}
export default Slide2
