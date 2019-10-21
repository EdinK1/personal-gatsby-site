import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageRefilter = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "inhabitent.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="project-img"
      fluid={data.fileName.childImageSharp.fluid}
      alt="Inhabitent project"
    />
  )
}

export default ImageRefilter
