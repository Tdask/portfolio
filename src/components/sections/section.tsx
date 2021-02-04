import React, { ReactNode } from "react"
import styled from "styled-components"
import SectionWrapper from "./sectionWrapper"
import MoreButton from "./moreButton"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"

export type SectionProps = {
  id: string
  background?: string
  title: string
  description: string
  moreLink?: string
  gifProps: GifPlayerProps
  children?: ReactNode | null
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  textAlign?: "left" | "right" | "center"
  alignItems?: "flex-start" | "flex-end" | "center"
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
  showMobile?: boolean
}

const Section = ({
  id,
  background,
  title,
  description,
  moreLink,
  gifProps,
  children = null,
  direction = "row",
  alignItems,
  textAlign = "left",
  showMobile,
}: SectionProps) => {
  return (
    <SectionWrapper
      direction={direction}
      id={id}
      background={background}
      alignItems={alignItems}
    >
      <div
        style={{
          flexDirection: "column",
          flex: 1,
          textAlign: textAlign,
          maxWidth: 350,
          marginBottom: showMobile ? "2rem" : null,
        }}
      >
        <h1>{title} </h1>
        <p>{description}</p>
        <MoreButton link={moreLink} />
      </div>
      <GifPlayer {...gifProps} />
      {children}
    </SectionWrapper>
  )
}

export default Section
