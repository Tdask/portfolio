import React, { useRef, useState } from "react"
import styled from "styled-components"
import { useSpring, animated, useChain } from "react-spring"
import { color } from "../styles"
import Image from "../image"
import BackgroundImage from "../backgroundImage"
import SectionWrapper, { HeroSectionWrapper } from "./sectionWrapper"
import Scroll from "../scroll"
// import { color } from "../styles/color"

// const StyledBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
//   flex: 1;
//   background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
// `

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

const useImageFadeIn = ref => {
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
const useFinalSlideInFromLeft = (ref, setToggle) => {
  const spring = useSpring({
    from: {
      transform: "translateX(-600px)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
    onRest: () => setToggle(true),
    ref,
  })
  return spring
}

const useSlideUp = ref => {
  const spring = useSpring({
    from: {
      transform: "translateY(200px)",
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

const useTextLighten = (ref, toggle) => {
  const spring = useSpring({
    to: {
      color: toggle ? color.eggShell : color.eerieBlack,
    },
    ref,
  })
  return spring
}

const Hero = () => {
  const [toggle, setToggle] = useState(false)
  const titleRef = useRef()
  const textRef = useRef()
  const text2Ref = useRef()
  const arrowRef = useRef()
  const nameRef = useRef()
  const backgroundRef = useRef()

  const nameStyle = useColorChange(nameRef, color.turquoise)

  const titleStyle = useFadeIn(titleRef)
  const textStyle = useSlideInFromLeft(textRef)
  const text2Style = useFinalSlideInFromLeft(text2Ref, setToggle)
  const arrowStyle = useSlideUp(arrowRef)
  // const backgroundStyle = useImageFadeIn(backgroundRef)
  const imageFadeInStyle = useSpring({
    to: {
      opacity: toggle ? 1 : 0,
    },
    backgroundRef,
  })

  const text1LightenAnimation = useSpring({
    to: {
      color: toggle ? color.eggShell : color.eerieBlack,
    },
    // delay: 200,
    textRef,
  })

  // const text2LightenAnimation = useTextLighten(text2Ref, toggle)

  useChain([titleRef, textRef, nameRef, text2Ref, arrowRef])
  return (
    <>
      <HeroSectionWrapper textAlign="left" direction="column">
        <div
          style={{
            textAlign: "left",
            color: color.eerieBlack,
            flexWrap: "wrap",
          }}
        >
          {/* <animated.h1 style={{ ...titleStyle, fontSize: 60, zIndex: 2 }}>
            Hello
          </animated.h1> */}
          <animated.h1
            style={{
              ...textStyle,
              fontSize: 60,
              display: "flex",
              marginBottom: 0,
              ...text1LightenAnimation,
            }}
          >
            Hi, my name is&nbsp;
            <animated.p style={nameStyle}>Logan Takahashi.</animated.p>
          </animated.h1>
          <animated.h1
            style={{
              ...text2Style,
              fontSize: 60,
              display: "flex",
              ...text1LightenAnimation,
            }}
          >
            I like to build things with code.
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
        <animated.div style={{ ...imageFadeInStyle, zIndex: -2 }}>
          <BackgroundImage
            style={{
              position: "absolute",
              top: -170,
              left: 0,
              width: "100%",
              height: "auto",
              minWidth: 950,
              // opacity: 0,
              // zIndex: -2,
            }}
          />
        </animated.div>
        <animated.div
          style={{
            ...arrowStyle,
            paddingTop: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingBottom: "15rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Scroll id="chroma" />
        </animated.div>
      </HeroSectionWrapper>
    </>
  )
}

export default Hero

{
  /* <animated.div
style={{
  ...backgroundStyle,
  backgroundImage:
    "url(https://payload.cargocollective.com/1/2/88505/2483236/space-teriyaki3017-50watts_900.jpg)",
}}
></animated.div> */
}
