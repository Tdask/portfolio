import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
import { useTransition, animated } from "react-spring"
// import { Slide1, Slide2, Slide3 } from "../components/chromaSlides"

// const pages = [
//   ({ style }) => (
//     <animated.div
//       style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
//     >
//       <Slide1 />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div
//       style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
//     >
//       <Slide2 />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div
//       style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
//     >
//       <Slide3 />
//     </animated.div>
//   ),
// ]

export const makeSlides = slides => {
  const formattedSlides = slides.map(Slide => {
    return ({ style }) => (
      <animated.div
        style={{
          ...style,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Slide />
      </animated.div>
    )
  })
  return formattedSlides
}

const SlideViewer = ({ slides, ...props }) => {
  const [index, set] = useState(0)
  const [dir, setDir] = useState(1)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: `translate3d(${100 * dir}%, 0 ,0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0 ,0)` },
    leave: { opacity: 0, transform: `translate3d(${-50 * dir}%, 0, 0)` },
  })

  return (
    <div
      // className="simple-trans-main"
      style={{
        position: "relative",
        // display: "flex",
        // flexDirection: "row",
        height: 400,
        width: 600,
        flexWrap: "nowrap",
        overflow: "hidden",
        alignSelf: "center",
      }}
      // onClick={onClick}
      {...props}
    >
      <div
        onClick={() => {
          setDir(1)
          onClick()
        }}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          zIndex: 3,
          cursor: "pointer",
          // width: "50%",
          // marginRight: "50%",
          // paddingLeft: "50%",
          // paddingBottom: "50%",
          // paddingTop: "50%",
          // height: "100%",
        }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="3x"
          style={{ opacity: 0.6 }}
        />
      </div>
      <div
        onClick={() => {
          setDir(-1)
          onClick()
        }}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          zIndex: 3,
          cursor: "pointer",
          // paddingRight: "50%",
          // paddingBottom: "50%",
        }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="3x"
          style={{ opacity: 0.6 }}
        />
      </div>

      {transitions.map(({ item, props, key }) => {
        console.log("item", item, "props", props, "key", key)
        const Slide = slides[item]
        return <Slide key={key} style={props} />
      })}
    </div>
  )
}

export default SlideViewer
