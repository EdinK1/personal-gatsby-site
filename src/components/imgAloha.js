import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageAloha = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "aloha.jpg" }) {
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
      alt="Aloha project"
    />
  )
}

export default ImageAloha
