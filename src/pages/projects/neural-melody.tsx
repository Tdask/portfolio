import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import Iframe from "react-iframe"
import Back from "../../components/backButton"
import ExternalLink from "../../components/externalLink"

const links = [
  {
    message: "Read the article I wrote about how I built this",
    linkText: "here",
    link:
      "https://logan-takahashi.medium.com/how-i-made-a-neural-melody-maker-with-magenta-js-cbeed2740b2a",
  },
  {
    message: "  (Or check out the",
    linkText: "deployed app",
    link: "https://melodymaker.herokuapp.com",
  },
]

const MelodyPage = () => {
  const breakpoints = useBreakpoint()
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: breakpoints.md ? "column-reverse" : "row",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Iframe
            onLoad={() => console.log("loaded!")}
            url="https://melodymaker.herokuapp.com/"
            width="500px"
            height="860px"
            id="melodyMaker"
            styles={{
              transform: "scale(0.5)",
              overflow: "hidden",
            }}
          />
        </div>
        <div style={{ display: "flex", padding: "3rem", flex: 1 }}>
          <div style={{ textAlign: "left" }}>
            <h2>Neural Melody Maker, spring 2019</h2>
            <p>
              Built as part of a hackathon, this project was my introduction to
              working with a machine learning api to generate musical sequences.
              The Neural Melody Maker uses a Recurrent Neural Network (RNN) to
              generate new variations of a melody.
            </p>
            {/* <p>
              A user can input a seed melody by selecting notes and then
              pressing the 'build melody' button to hear how the sequence
              evolves and develops. The 'heat' index controls how far away from
              the original seed melody it will deviate, eg. the higher the heat
              number, the more random the melodies will sound and vice versa.
            </p> */}
            <ol>
              <li>
                {" "}
                press 'Play' and toggle some notes to make a little starter
                melody
              </li>
              <li>
                once you're happy with what you've got press 'build melody' to
                hear and see how the neural network progresses it{" "}
              </li>
              <li>
                keep pressing 'Build Melody' to hear it grow and grow.{" "}
                <p style={{ fontStyle: "italic" }}>
                  (tip: The 'heat' index controls how far away from the original
                  seed melody it will deviate, eg. the higher the heat number,
                  the more random the melodies will sound and vice versa.)
                </p>
              </li>
            </ol>
            <ExternalLink {...links[0]} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginBottom: 0 }}>Try it out here.&nbsp;</p>
              <ExternalLink {...links[1]} />)
            </div>
          </div>
        </div>
      </div>
      <SectionWrapper>
        <Back />
      </SectionWrapper>
    </Layout>
  )
}

export default MelodyPage
