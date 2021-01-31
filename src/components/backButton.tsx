import React from "react"
import styled from "styled-components"
import { FiArrowLeft } from "react-icons/fi"

const BackWrapper = styled.div`
  position: absolute;
  &:hover {
    transform: scale(1.2);
  }
  transition: all 200ms;
`

const Back = () => {
  return (
    <BackWrapper>
      <FiArrowLeft
        size={50}
        style={{ cursor: "pointer" }}
        onClick={
          typeof history !== "undefined"
            ? () => history.go(-1)
            : () => console.log("no history")
        }
      />
      <p style={{ fontSize: 12 }}>back to portfolio</p>
    </BackWrapper>
  )
}

export default Back
