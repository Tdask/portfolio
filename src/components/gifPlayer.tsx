import React, { useState, useEffect, CSSProperties } from "react"
import { Helmet } from "react-helmet"
import { useSpring, animated } from "react-spring"
import styled, { keyframes, css } from "styled-components"
// import TokenTaxGif from "../images/gifs/TTcapture.gif"

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const shrink = keyframes`
  0% { transform: scale(1) translate(-50%, -50%) rotate(0deg) ; }
  100% { transform: scale(0) translate(-100%, -50%) rotate(360deg); }
`
const shrinkInterpolation = props =>
  props.isToggled
    ? css`
        ${shrink} 0.5s  linear;
      `
    : null

type GifButtonProps = {
  isToggled: boolean
  hide: boolean
  color?: string
}

const StyledGifButtonP = styled.p`
  display: ${props => (props.hide ? "none" : "null")};
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: sans-serif;
  border: 3px dotted ${props => props.color || "black"};
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
  animation: ${shrinkInterpolation};
  transform: translate(-50%, -50%);
  color: ${props => (props.color ? props.color : "black")};
`

const GifButton = ({ isToggled, color }: GifButtonProps) => {
  return (
    <>
      <StyledGifButtonP color={color} isToggled={isToggled}>
        GIF
      </StyledGifButtonP>
    </>
  )
}

export type GifPlayerProps = {
  stillSrc: string
  gifSrc: string
  imgStyle?: CSSProperties
  buttonColor?: string
}

const GifPlayer = ({
  stillSrc,
  gifSrc,
  imgStyle,
  buttonColor,
}: GifPlayerProps) => {
  const [toggleGif, setToggleGif] = useState(false)
  const [hide, setHide] = useState(true)
  const handleToggle = () => {
    setToggleGif(!toggleGif)
    setTimeout(() => {
      setHide(!hide)
    }, 100)
  }

  return (
    <>
      <div onClick={handleToggle}>
        <div style={{ position: "relative" }}>
          <img
            style={{ marginBottom: -10, ...imgStyle }} //why is there default bottom margin?
            src={toggleGif ? gifSrc : stillSrc}
          />
          {toggleGif ? null : (
            <GifButton hide={hide} isToggled={toggleGif} color={buttonColor} />
          )}
        </div>
      </div>
    </>
  )
}

export default GifPlayer
