import React from "react"
import styled from "styled-components"
export * from "./inputs"

const formContainerPadding = {
  xs: "1rem",
  sm: "1rem",
  md: "2rem",
  l: "3rem",
  xl: "3rem",
}

const inputPadding = {
  xs: 0,
  sm: 5,
  md: 10,
  l: 10,
  xl: 10,
}
const inputMargin = {
  xs: "1rem",
  sm: "1rem",
  md: 5,
  l: 5,
}

const StyledFormContainer = styled.div`
  // padding: ${props => formContainerPadding[props.currSize] || `3rem`};
  padding: 3rem;
  border: 1px solid grey;
  border-radius: 0.3rem;
  box-shadow: 10px 5px 5px silver;
  display: flex;
`
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
`

const EmailForm = ({ currSize, breakpoints }) => {
  return (
    <StyledFormContainer currSize={currSize}>
      <form
        method="post"
        action="https://formsubmit.co/825179f2450cf33f87dc8f2e99ad8a1c"
        // style={{ padding: "3rem" }}
      >
        <StyledInputContainer>
          <div
            style={{
              display: "flex",
              marginBottom: "2rem",
              flexDirection: breakpoints.sm ? "column" : "row",
            }}
          >
            <input
              placeholder="Email *"
              type="email"
              name="email"
              required={true}
              style={{
                padding: inputPadding[currSize],
                marginBottom: breakpoints.sm ? inputMargin[currSize] : 0,
                marginRight: breakpoints.sm ? 0 : 10,
              }}
            />
            <input
              placeholder="Name *"
              type="text"
              name="name"
              required={true}
              style={{ padding: inputPadding[currSize] }} /* xs: 5, m: 10*/
            />
          </div>
          <textarea
            placeholder="Message *"
            name="message"
            required={true}
            style={{ padding: inputPadding[currSize] }}
          />
        </StyledInputContainer>
        <button
          type="submit"
          style={{
            marginTop: "3rem",
            padding: inputPadding[currSize],
          }}
        >
          Send Message
        </button>
      </form>
    </StyledFormContainer>
  )
}
export default EmailForm
