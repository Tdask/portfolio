import React from "react"
import { FiExternalLink } from "react-icons/fi"

export type LinkProps = {
  message: string,
  linkText: string,
  link: string,
}

const ExternalLink = ({ message, link, linkText }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {message}&nbsp;{" "}
      <a
        href={link}
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
        target="__blank"
      >
        {linkText}&nbsp; <FiExternalLink />{" "}
      </a>
    </div>
)

export default ExternalLink
