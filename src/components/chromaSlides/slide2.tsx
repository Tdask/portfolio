import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide2 = () => {
  const data = useStaticQuery(graphql`
    query {
      chromaSlide2: file(relativePath: { eq: "chromaSlides/slide2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.chromaSlide2?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.chromaSlide2.childImageSharp.fluid} />
}

export default Slide2
