import React, { useContext } from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionWrapper from "../../components/sections/sectionWrapper"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const StyledH3 = styled.h3`
  font-style: italic;
  align-self: flex-start;
  text-align: left;
  flex: 1;
`

const AboutPage = () => {
  const breakpoints = useBreakpoint()
  return (
    <>
      <Layout>
        <div style={{ padding: "3rem 1.0875rem 3.45rem" }}>
          <h2>About me</h2>
          <p>
            I grew up playing violin and have a degree in Technology in Music
            and Related Arts. I have a strong foundation in digital signal
            processing and audio manipulation, production, and composition. My
            first experiences with coding were for creative projects including
            installations using Max/MSP/Jitter, designing circuits and programs
            from arduinos, and hacking video files via datamoshing.
          </p>
          <p>
            I have released music on labels including{" "}
            <a href="https://ghostly.com/artists/logan-takahashi">
              Ghostly International
            </a>
            ,{" "}
            <a href="https://planet.mu/artists/teengirl-fantasy/">Planet Mu</a>,
            and{" "}
            <a href="https://truepanther.com/roster/#teengirl-fantasy">
              True Panther
            </a>
            .
          </p>
          <h2>Some music stuff I have done:</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <StyledH3>DJ set on Lot Radio, Oct 2020</StyledH3>
              <iframe
                width={breakpoints.md ? "100%" : "50%"}
                // height="300"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/905586724&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
            <StyledH3> live set at MoMA PS1 Warm-Up, 2018</StyledH3>
            <iframe
              width={breakpoints.md ? "100%" : "50%"}
              //  height="300"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/495206472&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />

            <StyledH3>
              co-composed music for Opening Ceremony runway show, 2016
            </StyledH3>
            <iframe
              width={breakpoints.md ? "100%" : "50%"}
              // height="300"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247648288&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>

          <StyledH3> REKR music video, 2016</StyledH3>
          <iframe
            src="https://player.vimeo.com/video/164491913"
            width={breakpoints.sm ? "500" : "640"}
            height={breakpoints.sm ? "281" : "360"}
            // frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            // allowfullscreen
          />
          <h2 style={{ marginTop: 15 }}>Writing:</h2>
          <a
            href="https://logan-takahashi.medium.com/how-i-made-a-neural-melody-maker-with-magenta-js-cbeed2740b2a"
            target="_blank"
          >
            <StyledH3>
              How I made a Neural Melody Maker with Magenta.js, Medium, 2019
            </StyledH3>
          </a>
          <a href="https://www.vice.com/en/article/9avndy/teengirl-fantasy-ryuichi-sakamoto-releases">
            <StyledH3>
              Ryuichi Sakamoto's Most Influential Releases, Noisey, 2016
            </StyledH3>
          </a>
          <h2>Other:</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledH3> Undergrowth - installation, 2011</StyledH3>
            <iframe
              src="https://player.vimeo.com/video/506191865"
              width={breakpoints.sm ? "500" : "640"}
              height={breakpoints.sm ? "281" : "360"}
              allow="autoplay; fullscreen; picture-in-picture"
            />

            <StyledH3> Wrong Setting - video, 2008</StyledH3>
            <iframe
              src="https://player.vimeo.com/video/6821130"
              width={breakpoints.sm ? "500" : "640"}
              height={breakpoints.sm ? "338" : "432"}
              allow="autoplay; fullscreen; picture-in-picture"
            />

            <StyledH3>Pretty Puked - animation, 2007</StyledH3>
            <iframe
              width={breakpoints.sm ? "500" : "640"}
              height={breakpoints.sm ? "281" : "360"}
              src="https://www.youtube.com/embed/eutu_Vf_at0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
