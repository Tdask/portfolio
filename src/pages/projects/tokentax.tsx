import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import SlideViewer, { makePages } from "../../components/slideViewer"
import ttSlides from "../../components/tokentaxSlides"
import Back from "../../components/backButton"

const pages = makePages(ttSlides)

const technologies = [
  "React",
  "Redux-Sagas",
  "Contentful",
  "Node",
  "Express",
  "GraphQL",
  "Gatsby",
  "styled components",
  "Algolia",
  "React-Table",
]

const TTProjectPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     blogShot: file(relativePath: { eq: "TTshot1.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 900) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <SectionWrapper>
        {/* {data?.blogShot?.childImageSharp?.fluid ? (
          <Img
            style={{ flex: 1 }}
            fluid={data.blogShot.childImageSharp.fluid}
          />
        ) : (
          <p>no pic</p>
        )} */}
        <div>
          <SlideViewer pages={pages} />
        </div>
        <div
          style={{
            display: "block",
            flex: 1,
            textAlign: "left",
            padding: "3rem",
          }}
        >
          <h2> Contract developer at Token Tax, fall 2019</h2>
          <p>
            I worked on some projects at this start-up that provides tax
            accounting services for cryptocurrencies. One big project that I
            tackled was to build out their marketing site's blogs and resources
            section, the data for which was managed by Contentful headless CMS.
            I built the components to present blog data, the layout page for all
            blogs, and also a search bar using algolia api. I also did some SEO
            work for their site, building schemas and inserting them to the head
            with React Helmet. Take a look >
          </p>
          <h2>Technologies used:</h2>
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
                {item}{" "}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
      {/* <div style={{ padding: "3rem" }}>
        <h2>Technologies used:</h2>
        <ul
          style={{ display: "flex", flex: 0.5, justifyContent: "space-around" }}
        >
          {technologies.map(item => (
            <li key={item}>{item} </li>
          ))}
        </ul>
      </div> */}
      <SectionWrapper>
        <Back />{" "}
      </SectionWrapper>
    </Layout>
  )
}

export default TTProjectPage
