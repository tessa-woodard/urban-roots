import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/BackgroundSection"
// import Plants from "../components/Shop/Plants"

import Shop from "../components/Shop/Shop"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shop"
      styleClass="default-background"
    />
    {/* <Plants /> */}
    <Shop items={data.shop} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-us.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    shop: allContentfulPlant {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fluid(maxHeight: 400) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
