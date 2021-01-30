import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Section, { SectionProps } from "./section"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "styled-components"
import SectionWrapper, { SectionWrapperProps } from "./sectionWrapper"
import Img from "gatsby-image"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"
import { color } from "../styles"
import { ChromaIcon } from "../../components/logo"
const stillSrc: GifPlayerProps["stillSrc"] = require("../../images/chromaStill.png")
const gifSrc: GifPlayerProps["gifSrc"] = require("../../images/gifs/chromaCapture.gif")

const chromaData: SectionProps = {
  id: "chroma",
  background: color.eggShell,
  title: "Chroma Signet",
  description:
    "I worked on a small team to build and release this supply chain transparency app from the ground up.",
  moreLink: "/projects/chroma",
  gifProps: {
    stillSrc,
    gifSrc,
  },
}

const ChromaSection = ({ breakpoints }) => {
  const { md } = breakpoints
  return (
    <Section
      {...chromaData}
      direction={md ? "column" : "row-reverse"}
      showMobile={md}
    />
  )
}

export default ChromaSection
