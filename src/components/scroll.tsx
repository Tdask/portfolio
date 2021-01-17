import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { SectionWrapper } from "./sections/index"

type ScrollProps = {
  id: string
}

const ScrollWrapper = styled.div`
  &:hover {
    transform: scale(1.2);
  }
  transition: all 200ms;
`

const Scroll = ({ id }: ScrollProps) => {
  return (
    <ScrollWrapper>
      <FontAwesomeIcon
        color="white"
        className="scroll"
        size="3x"
        style={{ cursor: "pointer" }}
        icon={faChevronDown}
        onClick={() => scrollTo(`#${id}`)}
      />
    </ScrollWrapper>
  )
}

export default Scroll
