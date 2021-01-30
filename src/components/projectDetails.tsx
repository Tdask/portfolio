import React, { ReactNode } from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Layout from "./layout"
import SectionWrapper from "./sections/sectionWrapper"
import SlideViewer, { makeSlides } from "./slideViewer"
import Back from "./backButton"

const StyledTextContainer = styled.div`
  display: block;
  flex: 1;
  text-align: left;
  padding: 2rem;
`

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const StyledLI = styled.li`
  padding-right: 2rem;
`

export type ProjectDetailsProps = {
  technologies: Array<string>
  slides: Array<ReactNode>
  title: string
  description: string
  descriptionList?: Array<string>
  challengDescription?: string
}

const ProjectDetails = ({
  technologies,
  slides,
  title,
  description,
  descriptionList,
  challengDescription,
}: ProjectDetailsProps) => {
  const breakpoints = useBreakpoint()
  console.log("bp in projectD", breakpoints)

  return (
    <Layout>
      <SectionWrapper direction={breakpoints.md ? "column" : null}>
        <div style={{ flex: 1, alignSelf: "flex-start" }}>
          <h2>{title}</h2>
          <SlideViewer slides={slides} />
          {challengDescription ? (
            <>
              <h2>Technologies used:</h2>
              <StyledUL>
                {technologies.map(item => (
                  <StyledLI key={item}>{item}</StyledLI>
                ))}
              </StyledUL>
            </>
          ) : null}
        </div>
        <StyledTextContainer>
          <p>{description}</p>
          {descriptionList ? (
            <ul
              style={{
                textAlign: "left",
                fontStyle: "italic",
                fontSize: 17,
                marginTop: "1.45rem",
              }}
            >
              {descriptionList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : null}

          {challengDescription ? (
            <p>{challengDescription}</p>
          ) : (
            <>
              <h2>Technologies used:</h2>
              <StyledUL>
                {technologies.map(item => (
                  <StyledLI key={item}>{item}</StyledLI>
                ))}
              </StyledUL>
            </>
          )}
        </StyledTextContainer>
      </SectionWrapper>
      <SectionWrapper>
        <Back />
      </SectionWrapper>
    </Layout>
  )
}

export default ProjectDetails
