import React from "react"
import Img from "gatsby-image"

export default function Plant({ plant }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "500px" }}>
          <Img fluid={plant.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h6>{plant.title}</h6>
            <h6>${plant.price}</h6>
            {/* <button
              className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
              data-item-id={plant.id}
              data-item-name={plant.title}
              data-item-price={plant.price}
              data-item-image={plant.image.fluid.src}
              data-item-url="https://impresso-expresso.netlify.app/products"
            >
              Add To Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
