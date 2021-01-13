import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Hero from "../components/sections/hero"
import TokenTaxSection from "../components/sections/tokenTaxSection"
import ChromaSection from "../components/sections/chromaSection"
import Layout from "../components/layout"
import Scroll from "../components/scroll"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ChromaSection />
    <TokenTaxSection />
  </Layout>
)

export default IndexPage
