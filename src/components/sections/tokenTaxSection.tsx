import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SectionWrapper from "./sectionWrapper"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"

const stillSrc: GifPlayerProps["stillSrc"] = require("../../images/TTstill.png")
const gifSrc: GifPlayerProps["gifSrc"] = require("../../images/gifs/TTcapture.gif")

const TokenTaxSection = () => {
  return (
    <SectionWrapper
      textAlign="left"
      direction="row"
      id="tokenTax"
      background="khaki"
    >
      <div style={{ flexDirection: "column", maxWidth: 300 }}>
        <h1 style={{ alignSelf: "flex-start" }}>Token Tax</h1>
        <p style={{ textAlign: "left" }}>
          I built out blog pages on marketing site, as well as internal tooling
          for admin dashboard client comment feature.
        </p>
        <Link
          to="/projects/tokentax"
          style={{
            textDecoration: `none`,
            alignSelf: "flex-start",
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

export default TokenTaxSection
