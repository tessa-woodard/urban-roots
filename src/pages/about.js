import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import BackgroundSection from "../components/Globals/BackgroundSection"

import About from "../components/About/About"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
  </Layout>
)

export default AboutPage
