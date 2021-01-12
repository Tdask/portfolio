import React from "react"
import SectionWrapper from "./sectionWrapper"
import { useStaticQuery, graphql } from "gatsby"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"

const stillSrc: GifPlayerProps["stillSrc"] = require("../../images/TTstill.png")
const gifSrc: GifPlayerProps["gifSrc"] = require("../../images/gifs/TTcapture.gif")

const TokenTaxSection = () => {
  return (
    <SectionWrapper id="tokenTax" bgColor="aqua">
      <div style={{ flexDirection: "column" }}>
        <h1 style={{ alignSelf: "flex-start" }}>Token Tax</h1>
        <p style={{ textAlign: "left" }}>
          I built out blog pages on marketing site, as well as internal tooling
          for admin dashboard client comment feature.
        </p>
      </div>
      <GifPlayer gifSrc={gifSrc} stillSrc={stillSrc} />
    </SectionWrapper>
  )
}

export default TokenTaxSection
