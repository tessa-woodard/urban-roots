import React from "react"
import "./services.css"

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="speical_class">
          <h1 className="services-title">
            Our Specialty <span className="green-service">Green </span> Services
          </h1>
          <hr
            style={{
              width: "50%",
              textAlign: "center",
            }}
          />
          <p className="service-p">
            We can make anything <span className="green-service">grow</span> and
            <span className="green-service"> flourish</span>
          </p>
          <br />
          <hr />
          <div className="row">
            <div className="col-md-4 column">
              <img
                id="special_image"
                className="special-image"
                src="https://images.unsplash.com/photo-1598184875857-6be2852bbe9c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIzfHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              />
              <br />
              <h6 className="service-title">Plant Rescue</h6>
              <br />
              <p>
                Plants can go through some tough times. We offer a complete{" "}
                <b>rescue package </b>
                to revive and restore your green companions.
              </p>
            </div>
            <div className="col-md-4 column">
              <img
                id="special_image"
                src="https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
              <h6 className="service-title">Workshops</h6>
              <br />
              <p>
                Want to learn how to take better care of your house plant(s)?
                Take one of our 2-hour online classes and walk away with your
                own masterpiece!
              </p>
            </div>
            <div className="col-md-4 column">
              <img
                id="special_image"
                src="https://images.unsplash.com/photo-1559821735-82f81ca3153e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              />
              <h6 className="service-title">Replanting</h6>
              <br />
              <p>
                If your house plant(s) is in need of a little TLC or a complete
                makeover, we can bring your plant(s) back to its original glory
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
