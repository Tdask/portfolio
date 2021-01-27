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
          <h2>Personal project, summer 2019</h2>
          <p>
            I built this full stack app as part of my application for the NY-TTP
            program in 2019. It allows users to sign up, log in, search for and
            purchase stocks, as well as keep track of the current value of
            purchases.
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
