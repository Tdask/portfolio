import React from "react"
import styled from "styled-components"
export * from "./inputs"

const StyledFormContainer = styled.div`
  padding: 3rem;
  border: 1px solid grey;
  border-radius: 0.3rem;
  box-shadow: 10px 5px 5px silver;
`
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
`

const inputPadding = {
  xs: 5,
  sm: 5,
  md: 10,
  l: 10,
  xl: 10,
}
const inputMargin = {
  xs: 0,
  sm: 5,
  md: 10,
  l: 15,
}

const EmailForm = ({ currSize }) => {
  return (
    <StyledFormContainer>
      <form
        method="post"
        action="https://formsubmit.co/825179f2450cf33f87dc8f2e99ad8a1c"
        // style={{ padding: "3rem" }}
      >
        <StyledInputContainer>
          <div style={{ display: "flex", marginBottom: "2rem" }}>
            <input
              placeholder="Email *"
              type="email"
              name="email"
              required={true}
              style={{
                padding: inputPadding[currSize],
                marginRight: inputMargin[currSize],
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
