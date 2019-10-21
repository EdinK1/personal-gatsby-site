import React from "react"
import { FaGithub, FaPaperPlane, FaLinkedin } from "react-icons/fa"

const Social = () => (
  <aside className="social">
    <a rel="noreferrer" href="https://github.com/EdinK1">
      <FaGithub className="icon" />
    </a>
    <a rel="noreferrer" href="mailto:edinkaymakchi@gmail.com">
      <FaPaperPlane className="icon" />
    </a>
    <a
      rel="noreferrer"
      href="https://www.linkedin.com/in/edin-kaymakqi-3243b3163/"
    >
      <FaLinkedin className="icon" />
    </a>
  </aside>
)

export default Social
