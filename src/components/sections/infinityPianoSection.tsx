import React from "react"
import Section, { SectionProps } from "./section"
import { color } from "../styles"

const stillSrc = require("../../images/infinityPiano.png")
const gifSrc = stillSrc

const pianoData: SectionProps = {
  id: "infinityPiano",
  background: color.gradient3,
  title: "Infinity Piano",
  description:
    "Click the infinity button to generate an endless piece, or play along with the neural network and hear it finish your phrases.",
  moreLink: "projects/infinity-piano",
  gifProps: {
    gifSrc,
    stillSrc,
    imgStyle: {
      width: 500,
      height: 259,
    },
  },
}

const InfinityPianoSection = ({ breakpoints }) => {
  const { md } = breakpoints
  return (
    <Section {...pianoData} direction={md ? "column" : "row"} showMobile={md} />
  )
}

export default InfinityPianoSection
