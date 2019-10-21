import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageOmni = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "omni.jpg" }) {
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
      alt="Omni project"
    />
  )
}

export default ImageOmni
