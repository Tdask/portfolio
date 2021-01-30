import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

type MoreButtonProps = {
  link: string
}

const MoreButton = ({ link }) => {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        alignSelf: "flex-start",
      }}
    >
      more&nbsp;
      <FontAwesomeIcon icon="arrow-right" />
    </Link>
  )
}

export default MoreButton
