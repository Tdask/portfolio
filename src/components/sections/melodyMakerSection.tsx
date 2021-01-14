import React from "react"
import Section, { SectionProps } from "./section"

const melodyData: SectionProps = {
  id: "MelodyMaker",
  background: "ash",
  title: "Neural Melody Maker",
  description: "Experiments with Magenta's machine learning API for music. ",
}
const MelodySection = () => {
  return <Section {...melodyData} reverse />
}

export default MelodySection
