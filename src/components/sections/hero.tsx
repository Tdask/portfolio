import React, { useRef } from "react"
import styled from "styled-components"
import { useSpring, animated, useChain } from "react-spring"
import { color } from "../styles"
import Image from "../image"
import SectionWrapper, { HeroSectionWrapper } from "./sectionWrapper"
import Scroll from "../scroll"
// import { color } from "../styles/color"

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

const useSlideInFromLeft = ref => {
  const spring = useSpring({
    from: {
      transform: "translateX(-600px)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
    ref,
  })
  return spring
}

const useSlideUp = ref => {
  const spring = useSpring({
    from: {
      transform: "translateY(4400px)",
      opacity: 0,
    },
    to: [
      {
        transform: "translateY(0)",
        opacity: 1,
      },
      { transform: "scale(1.5)" },
      { transform: "scale(1)" },
    ],
    ref,
  })
  return spring
}

const useColorChange = (ref, inputColor) => {
  const spring = useSpring({
    from: {
      color: color.eerieBlack,
      transform: "scale(0)",
    },
    to: {
      color: inputColor,
      transform: "scale(1)",
    },
    ref,
  })
  return spring
}

const Hero = () => {
  const titleRef = useRef()
  const textRef = useRef()
  const text2Ref = useRef()
  const arrowRef = useRef()
  const nameRef = useRef()

  const nameStyle = useColorChange(nameRef, color.orangeCrayon)

  const titleStyle = useFadeIn(titleRef)
  const textStyle = useSlideInFromLeft(textRef)
  const text2Style = useSlideInFromLeft(text2Ref)
  const arrowStyle = useSlideUp(arrowRef)
  useChain([titleRef, textRef, nameRef, text2Ref, arrowRef])
  return (
    <>
      <HeroSectionWrapper textAlign="left">
        <div style={{ textAlign: "left", color: color.eerieBlack }}>
          <animated.h1 style={{ ...titleStyle, fontSize: 60 }}>
            Hello
          </animated.h1>
          <animated.h1 style={{ ...textStyle, fontSize: 60, display: "flex" }}>
            My name is&nbsp;
            <animated.p style={nameStyle}>Logan Takahashi.</animated.p>
          </animated.h1>
          <animated.h1 style={{ ...text2Style, fontSize: 60, display: "flex" }}>
            I am a&nbsp;<p style={{}}>developer</p>
            &nbsp;and&nbsp;
            <p style={{}}>musician&nbsp;</p> living in NYC.
          </animated.h1>
        </div>
        <div
          style={{
            // width: `300px`,
            marginBottom: `1.45rem`,
            flex: 1,
            alignSelf: "center",
          }}
        >
          {/* <Image path="rooftop-polaroid.png" /> */}
        </div>
      </HeroSectionWrapper>
      {/* <SectionWrapper paddingTop={0}> */}
      <animated.div
        style={{
          ...arrowStyle,
          paddingTop: "1rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Scroll id="chroma" />
      </animated.div>
      {/* </SectionWrapper> */}
    </>
  )
}

export default Hero
