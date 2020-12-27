import React from "react"
import "./services.css"

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="speical_class">
          <h1>Our specialty green services</h1>
          <p>We can make anything grow and flourish</p>
          <hr />
          <div className="row">
            <div className="col-md-4 column">
              <img
                id="special_image"
                src="https://swairmi.github.io/Plant-site/Home/pics/trio_single.jpg"
              />
              <h6>Plant rescue</h6>
              <p>
                Plant can go through some tough times. We offer a complete{" "}
                <a href>
                  <b>rescue package</b>
                </a>{" "}
                to revive and restore your green companions
              </p>
            </div>
            <div className="col-md-4 column">
              <img
                id="special_image"
                src="https://swairmi.github.io/Plant-site/Home/pics/trio_bell_jars.jpg"
              />
              <h6>Workshops</h6>
              <p>
                Want to learn how to construct your own little green world? Take
                one of our 2-hour classes and walk away with your own
                masterpiece!
              </p>
            </div>
            <div className="col-md-4 column">
              <img
                id="special_image"
                src="https://swairmi.github.io/Plant-site/Home/pics/trio_tools.jpg"
              />
              <h6>Replanting</h6>
              <p>
                If your terrarium is in need of a little TLC or a complete
                makeover, We can bring your terrarium back to its original glory
                with our plant rescue service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
