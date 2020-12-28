import React from "react"
import { useStyles } from "./useStyles"

const Inspiration = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.thirdInspo}>
        <div className={classes.inspo}>
          <div>
            <img
              className={classes.inspoImg}
              src="https://images.pexels.com/photos/5084182/pexels-photo-5084182.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://images.pexels.com/photos/4823081/pexels-photo-4823081.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              width="350px"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inspiration
