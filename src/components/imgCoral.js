import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageCoral = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "coral.png" }) {
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
      alt="Coral project"
    />
  )
}

export default ImageCoral
