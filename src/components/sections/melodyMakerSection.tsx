import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section, { SectionProps } from "./section"
import Img from "gatsby-image"
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
    <Section
      {...melodyData}
      // background="#b5b0b8ff"
      // alignItems="flex-start"
      reverse
    >
      {/* <div style={{ flex: 1, background: "pink" }} /> */}
      <Img
        style={{ flex: 1 }}
        fluid={data.melodyMakerImage.childImageSharp.fluid}
      />
      {/* <Iframe
        onLoad={() => console.log("loaded!")}
        url="https://melodymaker.herokuapp.com/"
        width="500px"
        height="860px"
        id="melodyMaker"
        styles={{ transform: "scale(0.5)", overflow: "hidden" }}
      /> */}
    </Section>
  )
}

export default MelodySection
