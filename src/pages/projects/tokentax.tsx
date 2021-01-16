import React from "react"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const technologies = [
  "React",
  "Redux-Sagas",
  "Contentful",
  "Node",
  "Express",
  "Gatsby",
  "styled components",
]

const TTProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      blogShot: file(relativePath: { eq: "TTshot1.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SectionWrapper>
        {data?.blogShot?.childImageSharp?.fluid ? (
          <Img
            style={{ flex: 1 }}
            fluid={data.blogShot.childImageSharp.fluid}
          />
        ) : (
          <p>no pic</p>
        )}
        <div style={{ display: "block", flex: 1 }}>
          <p>fall 2019</p>
          <p>
            I worked to build out the Resources section of the marketing site
            for Token Tax, a startup that provides tax accounting services for
            cryptocurrencies.
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

export default TTProjectPage
