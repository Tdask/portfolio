import React from "react"
import styled from "styled-components"
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${props => props.bgColor || null};
  padding: 3rem;
`
export default SectionWrapper
