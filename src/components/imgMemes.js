import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageMemes = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "memesmemes.png" }) {
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
      alt="Memesmemes project"
    />
  )
}

export default ImageMemes
