import React, { useState } from "react"
import PropTypes from "prop-types"
import VSensor from "react-visibility-sensor"

type VisibilitySensorProps = {
  once: boolean
  children: (boolean) => any
}

const VisibilitySensor = ({
  once,
  children,
  ...theRest
}: VisibilitySensorProps) => {
  const [active, setActive] = useState(true)
  return (
    <VSensor
      active={active}
      onChange={isVisible => once && isVisible && setActive(false)}
      {...theRest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  )
}

export default VisibilitySensor
