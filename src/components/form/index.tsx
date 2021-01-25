// export { default as Input } from "./inputs"
export * from "./inputs"

import React from "react"

const EmailForm = () => {
  return (
    <div
      style={{
        padding: "3rem",
        border: "1px solid grey",
        borderRadius: "0.3rem",
        boxShadow: "10px 5px 5px silver",
      }}
    >
      <form
        method="post"
        action="https://formsubmit.co/825179f2450cf33f87dc8f2e99ad8a1c"
        // style={{ margin: "3rem" }}
      >
        <div
          style={{
            display: "flex",
            background: "green",
            // flex: 1,
            flexDirection: "column",
            alignItems: "space-around",
            justifyContent: "space-around",
          }}
        >
          <input
            placeholder="Email *"
            type="email"
            name="email"
            required={true}
            // style={{ margin: 20 }}
          />
          <input
            placeholder="Name *"
            type="text"
            name="name"
            required={true}
            // style={{ margin: 20 }}
          />
          <textarea
            placeholder="Message *"
            name="message"
            required={true}
            // style={{ margin: 20 }}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
export default EmailForm
