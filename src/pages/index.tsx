import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import VisibilitySensor from "../components/visibilitySensor"
import { Spring } from "react-spring/renderprops"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Hero,
  InfinityPianoSection,
  MelodySection,
  ChromaSection,
  TokenTaxSection,
  StockSection,
} from "../components/sections"

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
              transform: isVisible ? "translateX(0)" : "translateX(200px)",
            }}
          >
            {({ opacity, transform }) => {
              return (
                <div style={{ opacity, transform }}>
                  <InfinityPianoSection breakpoints={breakpoints} />
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
              transform: isVisible ? "translateX(0)" : "translateX(-200px)",
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
            }}
          >
            {({
              opacity,
              transform,
            }: {
              opacity?: number
              transform?: string
            }) => {
              return (
                <div style={{ opacity }}>
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
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
              // transform: isVisible ? "translateX(0)" : "translateX(200px)",
            }}
          >
            {({ opacity }) => {
              return (
                <div style={{ opacity }}>
                  {/* <StockSection breakpoints={breakpoints} /> */}
                  <TokenTaxSection breakpoints={breakpoints} />
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
