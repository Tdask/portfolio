import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { SectionWrapper } from "./sections/index"

type ScrollProps = {
  id: string
}
const Scroll = ({ id }: ScrollProps) => {
  return (
    <FontAwesomeIcon
      size="3x"
      style={{ cursor: "pointer" }}
      icon={faChevronDown}
      onClick={() => scrollTo(`#${id}`)}
    />
  )
}

export default Scroll
