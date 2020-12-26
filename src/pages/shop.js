import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Shop from "../components/Shop/Shop"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" keywords={[`gatsby`, `application`, `react`]} />
    <Shop items={data.shop} />
  </Layout>
)

export const query = graphql`
  {
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
