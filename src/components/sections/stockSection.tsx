import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { color } from "../../components/styles"
import Section, { SectionProps } from "./section"

const stillSrc = require("../../images/stockStill.png")
const gifSrc = require("../../images/gifs/stockCapture.gif")

const stockData: SectionProps = {
  id: "stocks",
  background: color.silver,
  title: "Stock Portfolio",
  description: "A full stack stock portfolio application using IEX cloud api",
  moreLink: "/projects/stock-portfolio",
  gifProps: {
    gifSrc,
    stillSrc,
  },
}

const StockSection = ({ breakpoints }) => {
  const { md } = breakpoints
  return (
    <Section {...stockData} direction={md ? "column" : "row"} showMobile={md} />
  )
}

export default StockSection
