import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageBoom = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "boomtown.png" }) {
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
      alt="Boomtown project"
    />
  )
}

export default ImageBoom
