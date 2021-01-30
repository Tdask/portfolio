import React from "react"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import SlideViewer, { makeSlides } from "../../components/slideViewer"
import stockSlides from "../../components/stockSlides"
import Back from "../../components/backButton"
import ProjectDetails from "../../components/projectDetails"

const slides = makeSlides(stockSlides)

const technologies = [
  "React",
  "Redux",
  "Node.js",
  "Express",
  "Sequelize",
  "Postgres",
]

const stockProjectData = {
  technologies,
  slides,
  title: "Stock Portfolio, summer 2019",
  description:
    "I built this full stack app as part of my application for the NY-TTP program in 2019. It allows users to sign up, log in, search for and purchase stocks, as well as keep track of the current value of purchases.",
}

const StockPage = () => {
  return <ProjectDetails {...stockProjectData} />
}

export default StockPage
