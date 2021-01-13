import React from "react"
import { Link } from "gatsby"
import EmailForm from "../components/form"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Get in touch</h1>
    <EmailForm />
    {/* <EmailInput /> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage
