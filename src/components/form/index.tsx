// export { default as Input } from "./inputs"
export * from "./inputs"

import React from "react"

const EmailForm = () => {
  return (
    <form
      method="post"
      action="https://formsubmit.co/825179f2450cf33f87dc8f2e99ad8a1c"
    >
      <div style={{ display: "grid" }}>
        <input placeholder="Email" type="email" />
        <input placeholder="Name" type="text" />
        <textarea placeholder="Message" />
      </div>
      <button type="submit">Send Message</button>
    </form>
  )
}
export default EmailForm
