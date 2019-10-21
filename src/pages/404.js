import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Wow buddy, u lost?</h1>
    <p>
      You might want to go back <Link to="/">home</Link>
    </p>
  </Layout>
)

export default NotFoundPage
