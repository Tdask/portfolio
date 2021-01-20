import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SectionWrapper from "../../components/sections/sectionWrapper"
import SlideViewer from "../../components/slideViewer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const technologies = [
  "React",
  "React-Native",
  "Apollo/GraphQL",
  "Redux-Forms",
  "Yaml",
  "Animated API",
  "CSS",
  "Typescript",
]

const ChromaProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      threePhones: file(relativePath: { eq: "threePhones.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SectionWrapper alignItems="flex-start">
        {/* {data?.threePhones?.childImageSharp?.fluid ? (
          <Img
            style={{ flex: 1 }}
            fluid={data.threePhones.childImageSharp.fluid}
          />
        ) : (
          <p>no pic</p>
        )} */}
        <div style={{ display: "flex", flex: 1, position: "relative" }}>
          <SlideViewer style={{ flex: 1 }} />
        </div>
        <div style={{ display: "block", flex: 1, alignSelf: "flex-start" }}>
          <p>2020</p>
          <p>
            I worked with a small team of 5 to build and launch Chroma Signet -
            an open source protocol system for supply chain verification of
            products. I was responsible for building front end components across
            all projects related to this, which included: an -app built in
            React-Native that allows both customers to scan a product's custom
            Signet 'crypto' sticker with their phone and be shown information
            about a brand's product, as well as for brands to offer loyalty
            rewards to customers. -admin dashboard and tooling for businesses,
            including an SVG color picker interface, forms to generate product
            info cards, sticker batch generating form. -a suite of marketing
            pages
          </p>
          <p>
            Some memorable challenges included: Building out a component system
            that is responsive, performant, as well as compatible across both
            web and native platforms (such as a product card that is shared
            between the app and the admin dashboard). Forced me to think about
            components I was building on a higher level of abstraction, and also
            to think about the very structure of the file system of the monorepo
            (the order in which levels of abstraction consume another is
            important to avoid dependency loops for instance.)
          </p>
        </div>
      </SectionWrapper>
      <h2>Technologies used:</h2>
      <ul>
        {technologies.map(item => (
          <li key={item}>{item} </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ChromaProjectPage
