import React from "react"
// import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import Plant from "./Plant"

const getPlants = graphql`
  {
    plants: allContentfulPlant {
      edges {
        node {
          id
          title
          price
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

export default function Plants() {
  return (
    <StaticQuery
      query={getPlants}
      render={data => {
        return (
          <section className="plant py-5">
            <div className="container">
              {/* <Title title="Shop" /> */}
              <div className="row">
                {data.plants.edges.map(({ node: plant }) => {
                  return <Plant key={plant.id} plant={plant} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
