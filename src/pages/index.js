import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Social from "../components/social"
import Landing from "../components/landing"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import WorkInProgress from "../components/WorkInProgress"

const IndexPage = () => (
  <Layout>
    <SEO title="Edin Kaymakqi | Front End Developer" />
    <WorkInProgress />
    <Social />
    <Landing />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
