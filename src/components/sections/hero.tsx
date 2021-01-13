import React from "react"
import Image from "../image"
import SectionWrapper from "./sectionWrapper"
import Scroll from "../scroll"
import { color } from "../styles/color"

const Hero = () => {
  return (
    <>
      <SectionWrapper bgColor="tan">
        <h1>Hello</h1>
        <p>
          My name is Logan Takahashi, I am a developer, musician, artist living
          in NYC. I have previous background of music and art. Here are some
          personal projects I have made using code. And here is my portfolio of
          professional front-end work.
        </p>
        <div
          style={{
            width: `300px`,
            marginBottom: `1.45rem`,
            flex: 1,
            alignSelf: "center",
          }}
        >
          <Image path="rooftop-polaroid.png" />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <Scroll id="chroma" />
      </SectionWrapper>
    </>
  )
}

export default Hero
