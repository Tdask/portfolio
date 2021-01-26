import React from "react"
import Layout from "../../components/layout"
import SectionWrapper from "../../components/sections/sectionWrapper"
import SlideViewer, { makePages } from "../../components/slideViewer"
import slides from "../../components/stockSlides"
import Back from "../../components/backButton"

const pages = makePages(slides)

const technologies = [
  "React",
  "Redux",
  "Node.js",
  "Express",
  "Sequelize",
  "Postgres",
]

const StockPage = () => {
  return (
    <Layout>
      <SectionWrapper>
        <div style={{ flex: 1 }}>
          <SlideViewer pages={pages} />
        </div>
        <div style={{ padding: "3rem", textAlign: "right" }}>
          <p>summer 2019</p>
          <p>
            Full stack app built using the NERDS stack. Built as part of my
            application for NY TTP program in 2019. Allows users to sign-up,
            log-in, search for and purchase stocks as well keep track of current
            value of purchases.
          </p>
          <h2 style={{ textAlign: "left" }}>Technologies Used:</h2>
          <ul
            style={{
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {technologies.map(item => (
              <li key={item} style={{ paddingRight: "2rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
      <SectionWrapper align="flex-start">
        <Back />
      </SectionWrapper>
    </Layout>
  )
}

export default StockPage
