import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../components/styles"
import SectionWrapper from "./sectionWrapper"
import GifPlayer, { GifPlayerProps } from "../gifPlayer"

const stillSrc = require("../../images/stockStill.png")
const gifSrc = require("../../images/gifs/stockCapture.gif")

const StockSection = () => {
  return (
    <SectionWrapper
      textAlign="left"
      // direction="row-reverse"
      id="stocks"
      background={color.eggShell}
    >
      <div style={{ flexDirection: "column", maxWidth: 300 }}>
        <h1 style={{ alignSelf: "flex-start" }}>Stock Portfolio</h1>
        <p style={{ textAlign: "left" }}>
          A full stack application that allows users to sign-up, log-in, search
          for stocks using IEX cloud api, purchase stocks and keep track of
          running value of purchases.
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

export default StockSection
