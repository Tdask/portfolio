import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SectionWrapper from "../../components/sections/sectionWrapper"
import SlideViewer, { makePages } from "../../components/slideViewer"
import chromaSlides from "../../components/chromaSlides"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Back from "../../components/backButton"

const pages = makePages(chromaSlides)

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
  // const data = useStaticQuery(graphql`
  //   query {
  //     threePhones: file(relativePath: { eq: "threePhones.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 600) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
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
        <div style={{ textAlign: "left", flex: 1 }}>
          <SlideViewer
            pages={pages}
            // style={{ flex: 1 }}
          />
          <h2 style={{ marginTop: "1.45rem" }}>Technologies used:</h2>
          <div style={{ display: "flex" }}>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                // flex: 0.5,
                // justifyContent: "space-around",
              }}
            >
              {technologies.map(item => (
                <li key={item} style={{ paddingRight: "2rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "block",
            flex: 1,
            alignSelf: "flex-start",
            padding: "3rem",
            textAlign: "left",
          }}
        >
          <p>2020</p>
          <p style={{ textAlign: "left" }}>
            I worked with a team of 5 to build and launch Chroma Signet - an
            open source protocol system for supply chain verification of
            products. I was responsible for building front end components across
            all projects related to this, which included:
            <ul
              style={{
                textAlign: "left",
                fontStyle: "italic",
                fontSize: 17,
                marginTop: "1.45rem",
              }}
            >
              <li>
                an app built in React-Native that allows both customers to scan
                a product's custom Signet 'crypto' sticker with their phone and
                be shown information about a brand's product, as well as for
                businesses to offer loyalty rewards to customers
              </li>
              <li>
                admin dashboard and tooling for businesses, including an SVG
                color picker interface, forms to generate product info cards,
                sticker batch generating form.
              </li>
              <li>
                a suite of marketing pages, built to spec and coordination with
                designer.
              </li>
            </ul>
          </p>
          <p style={{ textAlign: "left" }}>
            One fun challenge that I faced was building a component system that
            is responsive, performant, as well as compatible across both web and
            native platforms (such as a product card that is shared between the
            app and the admin dashboard). Forced me to think about components I
            was building on and even higher level of abstraction, and also to be
            more deeply aware of the the very structure of the file system of
            the monorepo (ensuring a unidirectional flow of dependencies amongst
            component abstractions for instance).
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <Back />
      </SectionWrapper>
    </Layout>
  )
}

export default ChromaProjectPage
