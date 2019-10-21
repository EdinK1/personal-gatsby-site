import React from "react"

const ProjectBtn = ({ url }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="project-link-project"
    href={url}
  >
    View project
  </a>
)

export default ProjectBtn
