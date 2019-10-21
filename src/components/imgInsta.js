import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageInsta = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "instanews.jpg" }) {
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
      alt="Instanews project"
    />
  )
}

export default ImageInsta
