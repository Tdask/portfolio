import React from "react"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import Iframe from "react-iframe"
import Back from "../../components/backButton"

const MelodyPage = () => {
  return (
    <Layout>
      <SectionWrapper direction="column">
        <h3>spring 2019</h3>
        <p>
          Built as part of a four day hackathon, this explores some of the
          possiblities of machine learning for generation of musical sequences.
          Uses a Recurrent Neural Network (RNN) to take sequences input from the
          sequencer grid, and use as seeds to generate new variations of the
          melody. One can simply input simple few note melody, and continuously
          press 'build melody' to heaar how the sequence evolves and develops.
          The heat index controls how far away from the original seed sequence
          it will guess, eg. the higher the heat number, the more random
          generated melodies will sound and vice versa.
        </p>
        <p>
          Read more about how I built this{" "}
          <a
            href="https://logan-takahashi.medium.com/how-i-made-a-neural-melody-maker-with-magenta-js-cbeed2740b2a"
            target="_blank"
          >
            here
          </a>
        </p>
        <p>
          check out the deployed app{" "}
          <a href="https://melodymaker.herokuapp.com/" target="_blank">
            here
          </a>
          , or try playing around with the embedded version below.
        </p>
      </SectionWrapper>
      <div
        style={{
          display: "flex",
          flex: 1,
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
      <SectionWrapper>
        <Back />
      </SectionWrapper>
    </Layout>
  )
}

export default MelodyPage
