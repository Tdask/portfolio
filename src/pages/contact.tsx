import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import EmailForm from "../components/form"
import socialIcons from "../components/socialIcons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SectionWrapper } from "../components/sections"
import { getCurrentSize } from "../components/helpers"

const StyledIconContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
`
const ContactPage = () => {
  const breakpoints = useBreakpoint()
  const currSize = getCurrentSize(breakpoints)
  return (
    <Layout>
      {/* <SectionWrapper direction="column"> */}
      {/* <div
        style={{
          background: "teal",
          display: "flex",
          flexDirection: "column",
          flex: 0.8,
        }}
      > */}
      <SEO title="Contact" />
      <h1 style={{ textAlign: "center" }}>Get in touch</h1>
      <StyledIconContainer>
        {socialIcons.map(icon => (
          <a
            href={icon.link}
            key={icon.link}
            target="__blank"
            style={{ color: "black" }}
          >
            <icon.icon size={32} />
          </a>
        ))}
      </StyledIconContainer>

      <EmailForm currSize={currSize} breakpoints={breakpoints} />
      {/* <EmailInput /> */}
      {/* <Link to="/">Go back to the homepage</Link> */}
      {/* </SectionWrapper> */}
      {/* </div> */}
    </Layout>
  )
}

export default ContactPage
