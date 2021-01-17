import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import SectionWrapper, { SectionWrapperProps } from "./sectionWrapper"
import Img from "gatsby-image"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"
import { color } from "../styles"
import { ChromaIcon } from "../../components/logo"
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

  // const StyledArrow = styled.div`
  //   hov
  // `

  return (
    <SectionWrapper
      direction="row-reverse"
      id="chroma"
      justifyContent="space-around"
      background={color.eggShell}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
        {/* <ChromaIcon /> */}
        <h1 style={{ alignSelf: "flex-end", color: color.midnight }}>
          Chroma Signet
        </h1>
        <p style={{ textAlign: "end" }}>
          I worked on building and releasing an app from scratch with a small
          team of 5 using React Native
        </p>
        <Link
          to="/projects/chroma"
          style={{
            textDecoration: `none`,
            alignSelf: "flex-end",
          }}
        >
          more&nbsp;
          <FontAwesomeIcon
            icon={faArrowRight}
            // style={{ cursor: "pointer", alignSelf: "flex-end" }}
          />
        </Link>
      </div>
      <GifPlayer gifSrc={gifSrc} stillSrc={stillSrc} />
    </SectionWrapper>
  )
}

export default ChromaSection
