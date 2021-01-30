import React, { useContext } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import VisibilitySensor from "../components/visibilitySensor"
import { useSpring, animated, useChain } from "react-spring"
import { Spring } from "react-spring/renderprops"
import Hero from "../components/sections/hero"
import TokenTaxSection from "../components/sections/tokenTaxSection"
import ChromaSection from "../components/sections/chromaSection"
import Layout from "../components/layout"
import Scroll from "../components/scroll"
import SEO from "../components/seo"
import MelodySection from "../components/sections/melodyMakerSection"
import StockSection from "../components/sections/stockSection"

const IndexPage = () => {
  const breakpoints = useBreakpoint()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero breakpoints={breakpoints} />
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            delay={400}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(400px)",
            }}
          >
            {({ opacity, transform }) => {
              return (
                <div style={{ opacity, transform }}>
                  <ChromaSection breakpoints={breakpoints} />
                </div>
              )
            }}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            delay={400}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-400px)",
            }}
          >
            {({ opacity, transform }) => {
              return (
                <div style={{ opacity, transform }}>
                  <TokenTaxSection breakpoints={breakpoints} />
                </div>
              )
            }}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
              // transform: isVisible ? "translateX(0)" : "translateX(200px)",
            }}
          >
            {({ opacity, transform }) => {
              return (
                <div style={{ opacity, transform }}>
                  <MelodySection breakpoints={breakpoints} />
                </div>
              )
            }}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
              // transform: isVisible ? "translateX(0)" : "translateX(200px)",
            }}
          >
            {({ opacity, transform }) => {
              return (
                <div style={{ opacity, transform }}>
                  <StockSection breakpoints={breakpoints} />
                </div>
              )
            }}
          </Spring>
        )}
      </VisibilitySensor>
    </Layout>
  )
}

export default IndexPage
