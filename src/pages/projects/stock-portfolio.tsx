import React from "react"
import { makeSlides } from "../../components/slideViewer"
import stockSlides from "../../components/stockSlides"
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
  links: [
    {
      message: "check it out on",
      linkText: "github",
      link: '"https://github.com/Tdask/TTP-FS"',
    },
  ],
}

const StockPage = () => {
  return <ProjectDetails {...stockProjectData} />
}

export default StockPage
