import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section, { SectionProps } from "./section"
import SectionWrapper from "./sectionWrapper"
import Iframe from "react-iframe"

const melodyData: SectionProps = {
  id: "MelodyMaker",
  background: "#b5b0b8ff",
  title: "Neural Melody Maker",
  description:
    "Build and progress endless variations of a melody using Recurrent Neural Network ",
  justifyContent: "center",
}
const MelodySection = () => {
  const data = useStaticQuery(graphql`
    query {
      melodyMakerImage: file(relativePath: { eq: "NeuralMM.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.melodyMakerImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <SectionWrapper id="neuralMelody" direction="column">
      <h1>Neural Melody Maker (spring 2019)</h1>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "1.45rem" }}
      >
        <Img
          style={{ flex: 1.2 }}
          fluid={data.melodyMakerImage.childImageSharp.fluid}
        />
        <div style={{ flex: 2 }}>
          <p>
            Generate and build upon melodies using a recurrent neural network.
            Uses google's Magenta.js api as well as web audio.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default MelodySection
