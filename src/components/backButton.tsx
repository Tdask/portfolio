import React from "react"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FiArrowLeft } from "react-icons/fi"
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

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
      {/* <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        icon="arrow-left"
        size="3x"
        onClick={
          typeof history !== "undefined"
            ? () => history.go(-1)
            : () => console.log("no history")
        }
      /> */}
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
