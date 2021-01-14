import React, { useRef } from "react"
import styled from "styled-components"
import { useSpring, animated, useChain } from "react-spring"
import Image from "../image"
import SectionWrapper, { HeroSectionWrapper } from "./sectionWrapper"
import Scroll from "../scroll"
import { color } from "../styles/color"

const useFadeIn = ref => {
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    ref,
  })
  return spring
}

const Hero = () => {
  const titleRef = useRef()
  const textRef = useRef()
  const arrowRef = useRef()
  const titleStyle = useFadeIn(titleRef)
  const textStyle = useFadeIn(textRef)
  const arrowStyle = useFadeIn(arrowRef)
  useChain([titleRef, textRef, arrowRef])
  return (
    <>
      <HeroSectionWrapper>
        <animated.h1 style={titleStyle}>Hello</animated.h1>
        <animated.h1 style={textStyle}>
          My name is Logan Takahashi, I am a developer and musician living in
          NYC. Here is some of my recent work.
        </animated.h1>
        <div
          style={{
            width: `300px`,
            marginBottom: `1.45rem`,
            flex: 1,
            alignSelf: "center",
          }}
        >
          {/* <Image path="rooftop-polaroid.png" /> */}
        </div>
      </HeroSectionWrapper>
      <SectionWrapper>
        <animated.div style={arrowStyle}>
          <Scroll id="chroma" />
        </animated.div>
      </SectionWrapper>
    </>
  )
}

export default Hero
