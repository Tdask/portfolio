import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide1 = () => {
  const data = useStaticQuery(graphql`
    query {
      TTslide2: file(
        relativePath: { eq: "tokentaxSlides/taxResourcesSlide.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 970) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.TTslide2?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.TTslide2.childImageSharp.fluid} />
}
export default Slide1
