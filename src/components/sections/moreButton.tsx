import React from "react"
import { Link } from "gatsby"
import { FiArrowRight } from "react-icons/fi"

type MoreButtonProps = {
  link: string
}

const MoreButton = ({ link }: MoreButtonProps) => {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        alignSelf: "flex-start",
        color: "#000000CC",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        more&nbsp;
        <FiArrowRight />
      </div>
    </Link>
  )
}

export default MoreButton
