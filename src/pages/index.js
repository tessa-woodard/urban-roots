import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

import ABitMoreGreen from "../components/Homepage/ABitMoreGreen/ABitMoreGreen"
import Services from "../components/Homepage/Services/Services"
import BreakerBanner from "../components/Homepage/BreakerBanner/BreakerBanner"
import Reviews from "../components/Homepage/Reviews/Reviews"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Urban Roots
      Plant Your Roots With Us. 🌱"
      styleClass="default-background"
    />
    <ABitMoreGreen />
    <BreakerBanner />
    <Services />
    <Reviews />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
