import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import styled from "styled-components"
import SectionWrapper, { SectionWrapperProps } from "./sectionWrapper"
import Img from "gatsby-image"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"
import { color } from "../styles"
const stillSrc: GifPlayerProps["stillSrc"] = require("../../images/chromaStill.png")
const gifSrc: GifPlayerProps["gifSrc"] = require("../../images/gifs/chromaCapture.gif")

const ChromaSection = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     threePhoneImage: file(relativePath: { eq: "threePhones.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <SectionWrapper
      direction="row-reverse"
      id="chroma"
      justifyContent="space-around"
      background={color.silver}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
        <h1 style={{ alignSelf: "flex-end", color: color.midnight }}>
          Chroma Signet App
        </h1>
        <p style={{ textAlign: "end" }}>
          I worked on building and releasing an app from scratch with a small
          team of 5 using React Native
        </p>
      </div>
      <GifPlayer gifSrc={gifSrc} stillSrc={stillSrc} />
    </SectionWrapper>
  )
}

export default ChromaSection
