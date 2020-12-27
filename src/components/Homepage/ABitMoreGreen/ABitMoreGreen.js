import React from "react"
import { Link } from "gatsby"
import "./abitmoregreen.css"

const ABitMoreGreen = () => {
  return (
    <section className="first_section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 column">
            <img
              className="first_section_picture"
              src="https://swairmi.github.io/Plant-site/Home/pics/first-section-groupplants.jpg"
            />
          </div>
          <div className="col-md-7 column">
            <h2>Bring a bit more green into your life.....</h2>
            <p className="first_section_text_one">
              Plants are trending, we know... and they add so much to the vibe
              of a space! But when you embellish interior spaces with
              houseplants, you’re not just adding greenery. These living
              organisms interact with your body, mind and home in ways that can
              enhance your quality of life. For starters, they help to improve
              the quality of indoor air, and studies have also shown that being
              around plants improves concentration, memory and productivity.
            </p>
            <p className="first_section_text_two">
              So bring some of this green goodness into your living space with
              our plant products. As a self-contained ecosystem, our{" "}
              <a href>
                <b>handcrafted terrariums</b>
              </a>{" "}
              are particularly ideal for plant-novices, requiring minimal
              maintenance and care. Simply place them close to a window, water
              sparingly, and watch them flourish in your living space.
            </p>
            <a href="/shop" class="btn btn-outline-dark lg">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ABitMoreGreen
