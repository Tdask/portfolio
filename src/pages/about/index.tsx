import React from "react"
import styled from "styled-components"
import SectionWrapper from "../../components/sections/sectionWrapper"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = () => {
  return (
    <>
      <Layout>
        <div style={{ padding: "3rem 1.0875rem 3.45rem" }}>
          <h1>Bio</h1>
          <p>
            I grew up playing violin and have a degree in Technology in Music
            and Related Arts. I have a strong foundation in digital signal
            processing and audio manipulation, production, and composition. My
            first experiences with coding were for creative projects such as
            installations using Max/MSP/Jitter, designing circuits and programs
            from arduinos, hacking video files via datamoshing.
          </p>
          <p>
            I have released music on Ghostly International, Planet Mu, True
            Panther and R&S.
          </p>
          <h3>
            Here are some past things I have made, done, or had the opportunity
            to collaborate on:
          </h3>

          <iframe
            width="100%"
            // height="300"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/905586724&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />

          <iframe
            src="https://player.vimeo.com/video/164491913"
            width="640"
            height="360"
            // frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            // allowfullscreen
          />

          <iframe
            width="100%"
            // height="300"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247648288&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
