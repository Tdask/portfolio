import React, {useState, useEffect} from "react"
import Layout from "../../components/layout"
import Iframe from "react-iframe"
import Back from "../../components/backButton"
import ExternalLink from "../../components/externalLink"
import { SectionWrapper } from "../../components/sections"
const InfinityPianoPage = () => {
  const [iFrameDimensions, setIFrameDimensions] = useState({width: 0, height: 0})
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIFrameDimensions({
        width: window.innerWidth * 0.9,
        height: window.innerHeight
      })
    }
  },[])
  const {width, height} = iFrameDimensions
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: width,
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
          width={width}
          height={height}
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
