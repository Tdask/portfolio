import React from "react"
import Section, { SectionProps } from "./section"
import { color } from "../../components/styles"
import { GifPlayerProps } from "../gifPlayer"

const stillSrc: GifPlayerProps["stillSrc"] = require("../../images/TTStill.png")
const gifSrc: GifPlayerProps["gifSrc"] = require("../../images/gifs/TTcapture.gif")

const tokenTaxData: SectionProps = {
  id: "tokenTax",
  background: color.gradient3Rev,
  title: "Token Tax",
  description:
    "I did a variety of front-end tasks for the marketing site of this tax support start-up.",
  moreLink: "/projects/tokentax",
  gifProps: {
    stillSrc,
    gifSrc,
  },
}

const TokenTaxSection = ({ breakpoints }) => {
  const { md } = breakpoints
  return (
    <Section
      {...tokenTaxData}
      direction={md ? "column" : "row-reverse"}
      showMobile={md}
    />
  )
}

export default TokenTaxSection
