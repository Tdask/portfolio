import React, { ReactNode } from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Layout from "./layout"
import SectionWrapper from "./sections/sectionWrapper"
import SlideViewer, { makeSlides } from "./slideViewer"
import Back from "./backButton"
import ExternalLink, { LinkProps } from "./externalLink"

const StyledTextContainer = styled.div`
  display: block;
  flex: 1;
  text-align: left;
  padding: ${props =>
    props.breakpoints.md ? `2rem 0rem 0rem 0rem ` : `0rem 0rem 0rem 2rem`};
  background: ${props => props.background || null};
`

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const StyledLI = styled.li`
  padding-right: 2rem;
`

const StyledSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`
const StyledDescriptionUL = styled.ul`
  text-align: left,
  font-style: italic,
  font-size: 17,
  margin-top: 1.45rem,
`

export type ProjectDetailsProps = {
  technologies: Array<string>
  slides: Array<ReactNode>
  title: string
  description: string
  descriptionList?: Array<string>
  challengDescription?: string
  links?: Array<LinkProps>
}

const ProjectDetails = ({
  technologies,
  slides,
  title,
  description,
  descriptionList,
  challengDescription,
  links,
}: ProjectDetailsProps) => {
  const breakpoints = useBreakpoint()

  return (
    <Layout>
      <SectionWrapper direction={breakpoints.md ? "column" : null}>
        <div
          style={{
            flex: 1,
            alignSelf: breakpoints.md ? "center" : "flex-start",
          }}
        >
          <h2>{title}</h2>
          <StyledSlideContainer>
            <SlideViewer slides={slides} breakpoints={breakpoints} />
          </StyledSlideContainer>
          {challengDescription ? (
            <div style={{ paddingTop: "1rem" }}>
              <h2>Technologies used:</h2>
              <StyledUL>
                {technologies.map(item => (
                  <StyledLI key={item}>{item}</StyledLI>
                ))}
              </StyledUL>
            </div>
          ) : null}
        </div>
        <StyledTextContainer breakpoints={breakpoints}>
          <p>{description}</p>
          {descriptionList ? (
            <StyledDescriptionUL>
              {descriptionList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </StyledDescriptionUL>
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
          <div
            style={{
              display: "flex",
              // justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {links
              ? links.map((link, i) => (
                  <ExternalLink
                    key={i}
                    message={link.message}
                    linkText={link.linkText}
                    link={link.link}
                  />
                ))
              : null}
          </div>
        </StyledTextContainer>
      </SectionWrapper>
      <SectionWrapper>
        <Back />
      </SectionWrapper>
    </Layout>
  )
}

export default ProjectDetails
