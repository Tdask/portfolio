import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Layout from "../../components/layout"
import Iframe from "react-iframe"
import Back from "../../components/backButton"
import ExternalLink from "../../components/externalLink"
import { SectionWrapper } from "../../components/sections"
const InfinityPianoPage = () => {

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: window?.innerWidth * 0.9,
        }}
      >
        <h2>Infinity Piano</h2>
        <p>
          A web-based piano interface built with ToneJs, MagentaJs, and Vanilla
          JS. Play along in musical conversation with Magenta's pre-trained MelodyRnn, or hit the infinity button to generate a new endless piece.
        </p>
        <Iframe
          onLoad={() => console.log("loaded!")}
          url="https://infinity-piano.netlify.app/"
          width={window?.innerWidth * 0.9}
          height={window?.innerHeight}
          id="infinityPiano"
        />
        <ExternalLink
          link={"https://infinity-piano.netlify.app/"}
          message={"Check out the deployed app"}
          linkText={"here"}
          alignSelf="flex-start"
        />
        <SectionWrapper>
          <Back />
        </SectionWrapper>
      </div>
    </Layout>
  )
}

export default InfinityPianoPage
