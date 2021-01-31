import React from "react"
import Section, { SectionProps } from "./section"
import { color } from "../styles"

const gifSrc = require("../../images/gifs/neuralMelodyCapture.gif")
const stillSrc = require("../../images/nmmStill.png")

const melodyData: SectionProps = {
  id: "neuralMelody",
  background: color.gradient3,
  title: "Neural Melody Maker",
  description:
    "A fun tool that allows users to generate and progress melodies using a recurrent neural network. Built with Magenta JS.",
  moreLink: "/projects/neural-melody",
  direction: "row-reverse",
  gifProps: {
    gifSrc,
    stillSrc,
    buttonColor: "yellow",
    // imgStyle: { transform: "scale(1.2)" },
  },
}
const MelodySection = ({ breakpoints }) => {
  const { md } = breakpoints
  return (
    <Section
      {...melodyData}
      direction={md ? "column" : "row-reverse"}
      showMobile={md}
    />
  )
}

export default MelodySection
