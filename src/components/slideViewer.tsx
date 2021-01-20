import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
import { useTransition, animated } from "react-spring"
import { Slide1, Slide2, Slide3 } from "../components/chromaSlides"

// const SlideViewer = () => {
//   return (
//     <Slider auto={1}>
//       <div>hi</div>
//       <div>ho</div>
//       <div>hey</div>
//       <div>hwww</div>
//     </Slider>
//   )
// }

// const StyledTransitionContainer = styled.div`
//   cursor: pointer;
//   position: relative;
//   height: 600px;
//   width: 100%;
//   & > div {
//     will-change: transform, opacity;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }
// `

const pages = [
  ({ style }) => (
    <animated.div
      style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
    >
      <Slide1 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
    >
      <Slide2 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
    >
      <Slide3 />
    </animated.div>
  ),
]

const SlideViewer = ({ ...props }) => {
  const [index, set] = useState(0)
  const [dir, setDir] = useState(1)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: `translate3d(${100 * dir}%, 0 ,0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0 ,0)` },
    leave: { opacity: 0, transform: `translate3d(${-50 * dir}%, 0, 0)` },
  })

  console.log("index", index)
  return (
    <div
      // className="simple-trans-main"
      style={{
        position: "relative",
        // display: "flex",
        // flexDirection: "row",
        height: 450,
        width: 600,
        flexWrap: "nowrap",
        overflow: "hidden",
      }}
      onClick={onClick}
      {...props}
    >
      <div
        onClick={() => {
          setDir(1)
          onClick
        }}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          zIndex: 3,
          cursor: "pointer",
          // width: "50%",
          // marginRight: "50%",
          paddingLeft: "50%",
          paddingBottom: "50%",
          // paddingTop: "50%",
          // height: "100%",
          background: "red",
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </div>
      <div
        onClick={() => {
          setDir(-1)
          onClick
        }}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          zIndex: 3,
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </div>

      {transitions.map(({ item, props, key }) => {
        console.log("item", item, "props", props, "key", key)
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default SlideViewer
