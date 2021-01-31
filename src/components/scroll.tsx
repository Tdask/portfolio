import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FiChevronDown } from "react-icons/fi"
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
      <FiChevronDown
        onClick={() => scrollTo(`#${id}`)}
        color="white"
        size={70}
      />
    </ScrollWrapper>
  )
}

export default Scroll
