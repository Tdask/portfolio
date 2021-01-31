import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeSlides } from "../../components/slideViewer"
import ttSlides from "../../components/tokentaxSlides"
import ProjectDetails from "../../components/projectDetails"

const slides = makeSlides(ttSlides)

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

const tokenTaxProjectData = {
  technologies,
  slides,
  title: "Contract developer at Token Tax, fall 2019",
  description:
    "I worked on some projects at this start-up that provides tax accounting services for cryptocurrencies. One big project that I tackled was to build out their marketing site's blogs and resources section, the data for which was managed by Contentful headless CMS. I built the components to present blog data, the layout page for all blogs, and also a search bar using algolia api. Other work I did included: ",
  descriptionList: [
    "SEO work for the marketing site, which included building schemas and inserting them to the head with React Helmet",
    "RESTful api and front-end components for admin commenting feature",
  ],
  links: [
    {
      message: "check out the",
      linkText: "blogs pages",
      link: "https://tokentax.co/blog/",
    },
  ],
}

const TTProjectPage = () => {
  return <ProjectDetails {...tokenTaxProjectData} />
}

export default TTProjectPage
