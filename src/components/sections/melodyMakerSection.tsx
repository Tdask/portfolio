import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Section, { SectionProps } from "./section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SectionWrapper from "./sectionWrapper"
import Iframe from "react-iframe"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"
import { color } from "../styles"

const gifSrc = require("../../images/gifs/neuralMelodyCapture.gif")
const stillSrc = require("../../images/nmmStill.png")

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
    <SectionWrapper
      id="neuralMelody"
      justifyContent="space-around"
      background={color.midnight}
    >
      {/* <div
        style={{ display: "flex", flexDirection: "row", marginTop: "1.45rem" }}
      > */}
      {/* <Img
          style={{ flex: 1.2 }}
          fluid={data.melodyMakerImage.childImageSharp.fluid}
        /> */}
      <GifPlayer
        gifSrc={gifSrc}
        stillSrc={stillSrc}
        imgStyle={{ transform: "scale(1.2)" }}
        buttonColor="orange"
      />
      <div
        style={{
          flex: 1,
          maxWidth: 300,
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: "right",
          color: color.mango,
        }}
      >
        <h1>Neural Melody Maker</h1>
        <p>
          Generate and build upon melodies using a recurrent neural network.
          Uses google's Magenta.js api as well as web audio.
        </p>
        <Link
          to="/projects/neural-melody"
          style={{
            textDecoration: `none`,
            alignSelf: "flex-start",
          }}
        >
          more&nbsp;
          <FontAwesomeIcon
            icon={faArrowRight}
            // style={{ cursor: "pointer", alignSelf: "flex-end" }}
          />
        </Link>
      </div>
      {/* </div> */}
    </SectionWrapper>
  )
}

export default MelodySection
