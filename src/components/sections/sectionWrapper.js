import React from "react"
import styled from "styled-components"
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${props => props.bgColor || null};
  padding-right: 10rem;
  padding-left: 10rem;
`
export default SectionWrapper
