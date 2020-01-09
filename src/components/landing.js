import React from "react"
import { Link } from "gatsby"
import WorkInProgress from "./WorkInProgress"

const Landing = () => (
  <section id="landing" className="container landing">
    <WorkInProgress />
    <h1>Edin Kaymakqi</h1>
    <p className="landing-description">Web Developer living in Vancouver</p>
    <Link to="#showcase" className="btn">
      View my projects
    </Link>
  </section>
)

export default Landing
