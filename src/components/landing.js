import React from "react"
import { Link } from "gatsby"
import Banner from "../images/coding.png"

const Landing = () => (
  <section id="landing" className="container landing">
    <h1>Edin Kaymakqi</h1>
    <img className="coding" src={Banner} />
    <p className="landing-description">Web Developer living in Vancouver</p>
    <Link to="#showcase" className="btn">
      View my projects
    </Link>
  </section>
)

export default Landing
