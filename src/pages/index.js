import React from "react"
import { Link } from "gatsby"
import Hero from "../components/sections/hero"
import TokenTaxSection from "../components/sections/tokenTaxSection"
import ChromaSection from "../components/sections/chromaSection"
import Layout from "../components/layout"
import Image from "../components/image"
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
