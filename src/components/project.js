import React from "react"

import ProjectBtn from "./projectBtn"
import GithubBtn from "./githubBtn"

const Project = ({ Img, viewLink, githubLink }) => (
  <li className="project">
    <Img />
    <ProjectBtn url={viewLink} target="_blank" rel="noopener noreferrer" />
    {githubLink ? (
      <GithubBtn url={githubLink} target="_blank" rel="noopener noreferrer" />
    ) : null}
  </li>
)

export default Project
