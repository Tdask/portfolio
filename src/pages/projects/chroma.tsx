import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SectionWrapper from "../../components/sections/sectionWrapper"
import SlideViewer, { makeSlides } from "../../components/slideViewer"
import chromaSlides from "../../components/chromaSlides"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Back from "../../components/backButton"
import ProjectDetails, {
  ProjectDetailsProps,
} from "../../components/projectDetails"

const slides = makeSlides(chromaSlides)

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

const chromaProjectData: ProjectDetailsProps = {
  technologies,
  slides,
  title: "Front-end developer at Chroma Signet, 2020",
  description:
    "I worked with a team of five to build and launch Chroma Signet: an open source protocol system for supply chain verification of products. I was responsible for building front-end components across all related projects, which included:",
  descriptionList: [
    "an app built in React-Native that allows customers to scan a product's custom Signet 'crypto' sticker with their phone and be shown information about a brand's product, and businesses to offer loyalty rewards to customers",
    "admin tooling and dashboard for businesses, including an SVG color-picker interface, forms to generate product info cards, and a sticker batch generating form",
    "a suite of marketing pages, built to spec in coordination with the designer.",
  ],
  challengDescription:
    "One fun challenge that I faced was building a component system that is responsive, performant, and compatible across both web and native platforms (such as a product card that is shared between the app and the admin dashboard). This made me consider the components I was building on an even higher level of abstraction, and more aware of the structure of the file system of the monorepo (ensuring a unidirectional flow of dependencies amongst component abstractions, for instance).",
}

const ChromaProjectPage = () => {
  return <ProjectDetails {...chromaProjectData} />
}

export default ChromaProjectPage
