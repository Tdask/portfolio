import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { SectionWrapper } from "./sections/index"

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
      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        icon={faArrowLeft}
        size="3x"
        onClick={
          typeof history !== "undefined"
            ? () => history.go(-1)
            : () => console.log("no history")
        }
        // onClick={() => console.log("clik")}
      />
      <p style={{ fontSize: 12 }}>back to portfolio</p>
    </BackWrapper>
  )
}

export default Back
