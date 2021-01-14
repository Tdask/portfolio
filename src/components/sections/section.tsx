import React from "react"
import SectionWrapper from "./sectionWrapper"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"

export type SectionProps = {
  id: string
  background: string
  reverse?: boolean
  title: string
  description: string
}

const Section = ({ id, background, reverse, title, description }) => {
  return (
    <SectionWrapper
      direction={reverse ? "row-reverse" : "row"}
      id={id}
      background={background}
    >
      <div style={{ flexDirection: "column", maxWidth: 300 }}>
        <h1 style={{ alignSelf: "flex-start" }}>{title} </h1>
        <p style={{ textAlign: "left" }}>{description}</p>
      </div>
      {/* <GifPlayer gifSrc={gifSrc} stillSrc={stillSrc} /> */}
    </SectionWrapper>
  )
}

export default Section
