import React from "react"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaArrowRight } from "react-icons/fa"
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
        color: "#000000CC",
      }}
    >
      more&nbsp;
      {/* <FontAwesomeIcon icon="arrow-right" /> */}
      <FaArrowRight />
    </Link>
  )
}

export default MoreButton
