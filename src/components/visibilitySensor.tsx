import React, { useState } from "react"
import VSensor from "react-visibility-sensor"

type VisibilitySensorProps = {
  once: boolean
  children: (boolean) => any
  partialVisibility?: boolean
}

const VisibilitySensor = ({
  once,
  children,
  ...props
}: VisibilitySensorProps) => {
  const [active, setActive] = useState(true)
  return (
    <VSensor
      active={active}
      onChange={isVisible => once && isVisible && setActive(false)}
      {...props}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  )
}

export default VisibilitySensor
