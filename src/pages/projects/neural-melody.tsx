import React from "react"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import Iframe from "react-iframe"
import Back from "../../components/backButton"

const MelodyPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ flex: 1 }}>
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
              Built as part of a four-day hackathon, this project was my
              introduction to the possiblities of machine learning in the
              generation of musical sequences. The Neural Melody Maker uses a
              Recurrent Neural Network (RNN) to generate new variations of a
              melody.
            </p>
            <p>
              A user can input a seed melody by selecting notes and then
              pressing the 'build melody' button to hear how the sequence
              evolves and develops. The 'heat' index controls how far away from
              the original seed melody it will deviate, eg. the higher the heat
              number, the more random the melodies will sound and vice versa.
            </p>
            <p>
              Read about{" "}
              <a
                href="https://logan-takahashi.medium.com/how-i-made-a-neural-melody-maker-with-magenta-js-cbeed2740b2a"
                target="_blank"
              >
                how I built this
              </a>
              &nbsp;and check out the{" "}
              <a href="https://melodymaker.herokuapp.com/" target="_blank">
                deployed app
              </a>
              .
            </p>
            <p>Or have a play here.</p>
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
