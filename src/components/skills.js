import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGit,
  FaGulp,
  FaNpm,
  FaWordpress,
  FaPhp,
  FaNode,
} from "react-icons/fa"
import { DiMeteorfull } from "react-icons/di"

import SkillSet from "./skillSet"

const Skills = () => (
  <section id="skills" className="container skills">
    <h1>Skills</h1>
    <p>
      I love working with modern web technologies and always try to keep up with
      the latest trends.
    </p>
    <section className="skills-list">
      <SkillSet
        title="Front End"
        skills={[FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact]}
      />
      <SkillSet
        title="Tools/CMS"
        skills={[FaGithub, FaGit, FaGulp, FaNpm, FaWordpress]}
      />
      <SkillSet title="Back End" skills={[FaNode, DiMeteorfull, FaPhp]} />
    </section>
  </section>
)
export default Skills
