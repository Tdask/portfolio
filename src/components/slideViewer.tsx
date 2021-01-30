import React, { useState, useCallback } from "react"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { useTransition, animated } from "react-spring"

const arrowStyle = {
  position: "absolute",
  left: 0,
  top: "50%",
  zIndex: 3,
  cursor: "pointer",
}

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

const SlideViewer = ({ slides, breakpoints, ...props }) => {
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
      style={{
        position: "relative",
        flex: 1,
        height: breakpoints.sm ? 333 : 400,
        width: breakpoints.sm ? 500 : 600,
        flexWrap: "nowrap",
        overflow: "hidden",
        justifyContent: "auto",
      }}
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
        }}
      >
        {/* <FontAwesomeIcon
          icon="chevron-right"
          size="3x"
          style={{ opacity: 0.6 }}
        /> */}
        <FaChevronRight size={55} style={{ opacity: 0.6 }} />
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
        }}
      >
        {/* <FontAwesomeIcon
          icon="chevron-left"
          size="3x"
          style={{ opacity: 0.6 }}
        /> */}
        <FaChevronLeft size={55} style={{ opacity: 0.6 }} />
      </div>

      {transitions.map(({ item, props, key }) => {
        const Slide = slides[item]
        return <Slide key={key} style={props} />
      })}
    </div>
  )
}

export default SlideViewer
