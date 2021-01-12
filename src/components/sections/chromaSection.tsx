import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
// import styled from "styled-components"
import SectionWrapper from "./sectionWrapper"
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
      id="chroma"
      bgColor="linear-gradient(90deg, hsla(0, 0%, 5%, 1) 0%, hsla(126, 82%, 33%, 1) 100%)"
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: 500 }}>
          {/* <Img fluid={data.threePhoneImage.childImageSharp.fluid} /> */}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ alignSelf: "flex-end", color: color.silver }}>
            Chroma Signet App
          </h1>
          <p style={{ textAlign: "end" }}>
            I worked on building and releasing an app from scratch with a small
            team of 5 using React Native
          </p>
        </div>
      </div>
      <GifPlayer gifSrc={gifSrc} stillSrc={stillSrc} />
      <button style={{}} onClick={() => scrollTo("#tokenTax")}>
        V
      </button>
    </SectionWrapper>
  )
}

export default ChromaSection
