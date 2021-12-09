import React from "react"
import styled from "styled-components"
import { FiArrowLeft } from "react-icons/fi"

const BackWrapper = styled.div`
  position: absolute;
  &:hover {
    transform: scale(1.2);
  }
  transition: all 200ms;
  cursor: pointer;
  margin-top: ${props => props.marginTop};
`

const Back = () => {
  return (
    <BackWrapper
    marginTop={'45px'}
    onClick={
      typeof history !== "undefined"
        ? () => history.go(-1)
        : () => console.log("no history")
    }
    >
      <FiArrowLeft size={50} />
      <p style={{ fontSize: 12 }}>back to portfolio</p>
    </BackWrapper>
  )
}

export default Back
