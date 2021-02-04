import React, { useState, useCallback } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { useTransition, animated } from "react-spring"
import { getCurrentSize } from "../components/helpers"

const arrowStyle = {
  position: "absolute",
  top: "50%",
  zIndex: 3,
  cursor: "pointer",
} as const

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

const dimensions = {
  xs: [300, 200],
  sm: [500, 333],
  md: [600, 400],
  l: [600, 400],
  xl: [600, 400],
}

const SlideViewer = ({ slides, breakpoints, ...props }) => {
  const [width, height] = dimensions[getCurrentSize(breakpoints)]
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
        width: width,
        height: height,
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
          ...arrowStyle,
          right: 0,
        }}
      >
        <FiChevronRight size={55} style={{ opacity: 0.6 }} />
      </div>
      <div
        onClick={() => {
          setDir(-1)
          onClick()
        }}
        style={{
          ...arrowStyle,
          left: 0,
        }}
      >
        <FiChevronLeft size={55} style={{ opacity: 0.6 }} />
      </div>

      {transitions.map(({ item, props, key }) => {
        const Slide = slides[item]
        return <Slide key={key} style={props} />
      })}
    </div>
  )
}

export default SlideViewer
