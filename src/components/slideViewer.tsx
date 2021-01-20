import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import { Slide1, Slide2, Slide3 } from "../components/chromaSlides"

const StyledTransitionContainer = styled.div`
  cursor: pointer;
  position: absolute;
  will-change: transform, opacity;
`

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Slide1 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Slide2 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Slide3 />
    </animated.div>
  ),
]

const SlideViewer = ({ ...props }) => {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%, 0 ,0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0 ,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
  })

  console.log("transitions", transitions)
  return (
    <div
      // className="simple-trans-main"
      style={{
        position: "absolute",
        // display: "inline-flex",
        height: 450,
        flexWrap: "nowrap",
        overflow: "hidden",
      }}
      onClick={onClick}
      {...props}
    >
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default SlideViewer
