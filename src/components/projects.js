import React from "react"
import ImgRefilter from "./imgRefilter"
import ImgMemes from "./imgMemes"
import ImgTent from "./imgTent"
import ImgCoral from "./imgCoral"
import ImgAloha from "./imgAloha"
import ImgBoom from "./imgBoom"

import Project from "./project"

const Projects = () => (
  <section id="showcase" className="container showcase">
    <h1 className="projects-title">Projects</h1>
    <ul className="projects">
      <Project Img={ImgCoral} githubLink="https://github.com/EdinK1/coral" />
      <Project
        Img={ImgBoom}
        viewLink="https://boom.red.academy"
        githubLink="https://github.com/EdinK1/boomtown"
      />
      <Project
        Img={ImgRefilter}
        viewLink="https://refilter.van.cp.academy.red/"
        githubLink="https://github.com/EdinK1/refilter-ws1-2019"
      />
      <Project
        Img={ImgMemes}
        viewLink="https://memesmemes.netlify.com"
        githubLink="https://github.com/EdinK1/memesmemes"
      />
      <Project
        Img={ImgTent}
        viewLink="https://tent.academy.red"
        githubLink="https://github.com/EdinK1/Inhabitent"
      />
      <Project
        Img={ImgAloha}
        viewLink="https://aloha-apparel.netlify.com/"
        githubLink="https://github.com/EdinK1/Aloha-Apparel"
      />
    </ul>
  </section>
)

export default Projects
