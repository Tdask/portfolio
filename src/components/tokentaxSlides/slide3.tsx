import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide1 = () => {
  const data = useStaticQuery(graphql`
    query {
      TTslide3: file(relativePath: { eq: "tokentaxSlides/TTslide3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.TTslide3?.childImageSharp?.fluid) {
    return <p>no data</p>
  }
  return <Img fluid={data.TTslide3.childImageSharp.fluid} />
}
export default Slide1
