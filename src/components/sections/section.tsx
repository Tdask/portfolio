import React, { ReactNode } from "react"
import SectionWrapper from "./sectionWrapper"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"

export type SectionProps = {
  id: string
  background: string
  reverse?: boolean
  title: string
  description: string
  children?: ReactNode | null
  alignItems?: "flex-start" | "flex-end" | "center"
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
}

const Section = ({
  id,
  background,
  reverse,
  title,
  description,
  children = null,
  alignItems,
}) => {
  return (
    <SectionWrapper
      direction={reverse ? "row-reverse" : "row"}
      id={id}
      background={background}
      alignItems={alignItems}
    >
      <div style={{ flexDirection: "column", flex: 2 }}>
        <h1 style={{ alignSelf: "flex-start" }}>{title} </h1>
        <p style={{}}>{description}</p>
      </div>
      {/* <GifPlayer gifSrc={gifSrc} stillSrc={stillSrc} /> */}
      {children}
    </SectionWrapper>
  )
}

export default Section
