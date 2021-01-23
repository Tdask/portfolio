import React from "react"
import styled from "styled-components"
import SectionWrapper from "../../components/sections/sectionWrapper"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = () => {
  return (
    <>
      <Layout>
        <div style={{ padding: "3rem 1.0875rem 1.45rem" }}>
          <h1>Bio</h1>
          <p>
            I got my first experience coding with while in college while
            studying electronic music technology. Here is some of that.
          </p>
          <p>
            I have released a record and an EP on the label Ghostly
            International. Sometimes I play music on the radio, or live.
          </p>
          <p>
            I have also released 3 LP's as part of electronic duo Teengirl
            Fantasy, as well as other projects such as Opening Ceremony, music
            video.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
