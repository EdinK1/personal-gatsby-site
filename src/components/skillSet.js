import React from "react"

const SkillSet = ({ title, skills }) => {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {skills.map((Skill, id) => (
          <li key={id}>
            <Skill />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillSet
