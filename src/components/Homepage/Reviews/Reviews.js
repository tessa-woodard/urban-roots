import React from "react"
import "./reviews.css"

const Reviews = () => {
  return (
    <div className="special-class">
      <h1>Our Customer Testimonials</h1>
      <hr
        style={{
          width: "50%",
          textAlign: "center",
        }}
      />
      <br />
      <div className="reviews-wrapper">
        <ul className="carousel" data-target="carousel">
          <li className="review-card" data-target="review-card">
            <div className="review-card-inside">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/32/32326.svg"
                className="review-card-quote-mark"
              />
              <p className="review-card-text">
                “Any service that allows you to order a full grown plant online
                and then delivers it right to your door is my kind of service!"
              </p>
              <div className="review-card-name-section">
                <div className="review-card-headshot-column">
                  <img
                    src="https://images.unsplash.com/photo-1496439786094-e697ca3584d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    className="review-card-headshot"
                  />
                </div>
                <div className="review-card-name-column">
                  <span>Ryan</span>
                  <p>Denver, CO</p>
                </div>
              </div>
            </div>
          </li>

          <li className="review-card" data-target="review-card">
            <div className="review-card-inside">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/32/32326.svg"
                className="review-card-quote-mark"
              />
              <p className="review-card-text">
                “I purchased 2 plants from Urban Roots and I have no regrets.
                The plants came quickly, very easy to track, packaged very
                well!"
              </p>
              <div className="review-card-name-section">
                <div className="review-card-headshot-column">
                  <img
                    src="https://images.unsplash.com/photo-1565293253517-90cb8ce865a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHdvbWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    className="review-card-headshot"
                  />
                </div>
                <div className="review-card-name-column">
                  <span>Kelsey</span>
                  <p>Pittsburgh, PA</p>
                </div>
              </div>
            </div>
          </li>

          <li className="review-card" data-target="review-card">
            <div className="review-card-inside">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/32/32326.svg"
                className="review-card-quote-mark"
              />
              <p className="review-card-text">
                “I always struggle with how much to water plants, but this plant
                came with care instructions! Can't wait to order another plant!"
              </p>
              <div className="review-card-name-section">
                <div className="review-card-headshot-column">
                  <img
                    src="https://images.unsplash.com/photo-1506610154363-2e1a8c573d2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    className="review-card-headshot"
                  />
                </div>
                <div className="review-card-name-column">
                  <span>Kristen</span>
                  <p>Omaha, NE</p>
                </div>
              </div>
            </div>
          </li>

          <li className="review-card" data-target="review-card">
            <div className="review-card-inside">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/32/32326.svg"
                className="review-card-quote-mark"
              />
              <p className="review-card-text">
                “Loving my new Bamboo Palm plant.. the best page -- it was
                delivered STRAIGHT to my door, already potted, in the cutest
                packaging!"
              </p>
              <div className="review-card-name-section">
                <div className="review-card-headshot-column">
                  <img
                    src="https://images.unsplash.com/photo-1421772712538-0cb9171fc9e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwd2l0aCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    className="review-card-headshot"
                  />
                </div>
                <div className="review-card-name-column">
                  <span>Kaylyn</span>
                  <p>Riverside, CA</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Reviews
