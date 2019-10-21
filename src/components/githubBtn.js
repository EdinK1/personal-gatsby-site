import React from "react"

const GithubBtn = ({ url }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="project-link-github"
    href={url}
  >
    View GitHub
  </a>
)

export default GithubBtn
