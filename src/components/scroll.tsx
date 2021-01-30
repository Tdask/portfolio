import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaChevronDown } from "react-icons/fa"
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { SectionWrapper } from "./sections/index"

type ScrollProps = {
  id: string
}

const ScrollWrapper = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  transition: all 200ms;
`

const Scroll = ({ id }: ScrollProps) => {
  return (
    <ScrollWrapper>
      {/* <FontAwesomeIcon
        color="white"
        className="scroll"
        size="3x"
        style={{ cursor: "pointer" }}
        icon="chevron-down"
        onClick={() => scrollTo(`#${id}`)}
      /> */}
      <FaChevronDown
        onClick={() => scrollTo(`#${id}`)}
        color="white"
        size={70}
      />
    </ScrollWrapper>
  )
}

export default Scroll
