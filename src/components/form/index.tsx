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
        <input
          placeholder="Email *"
          type="email"
          name="email"
          required={true}
        />
        <input placeholder="Name *" type="text" name="name" required={true} />
        <textarea placeholder="Message *" name="message" required={true} />
      </div>
      <button type="submit">Send Message</button>
    </form>
  )
}
export default EmailForm
