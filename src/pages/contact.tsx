import React from "react"
import { Link } from "gatsby"
import EmailForm from "../components/form"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import socialIcons from "../components/socialIcons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ textAlign: "center" }}>Get in touch</h1>
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        marginBottom: "1rem",
      }}
    >
      {socialIcons.map(icon => (
        <a href={icon.link} target="__blank" style={{ color: "black" }}>
          <icon.icon size={32} />
        </a>
      ))}
    </div>

    <EmailForm />
    {/* <EmailInput /> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default ContactPage
