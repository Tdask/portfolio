import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SectionWrapper from "./sectionWrapper"

const ChromaSection = () => {
  return (
    <SectionWrapper bgColor="orange">
      <h1 style={{ alignSelf: "flex-end" }}>Chroma Signet App</h1>
      <p style={{ textAlign: "end" }}>
        I worked on building and releasing an app from scratch with a small team
        of 5 using React Native
      </p>
    </SectionWrapper>
  )
}

export default ChromaSection
