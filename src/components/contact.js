import React from "react"
import {
  FaEnvelopeOpenText,
  FaPhone,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa"

import ContactItem from "./contactItem"

const Contact = () => (
  <section id="contact" className="container contact">
    <h1 className="contact-title">Contact</h1>
    <p className="contact-desc">
      If you found my projects interesting, please feel free to contact me.
    </p>
    <section className="contact-info">
      <ContactItem
        text="edinkaymakchi@gmail.com"
        Icon={FaEnvelopeOpenText}
        url="mailto:edinkaymakchi@gmail.com"
      />
      <ContactItem
        text="604-240-7966"
        Icon={FaPhone}
        url="href='tel:1-604-240-7966'"
      />
      <ContactItem
        text="EdinK1"
        Icon={FaGithubSquare}
        url="https://github.com/EdinK1    "
      />
      <ContactItem
        text="@edinkaymakqi"
        Icon={FaLinkedin}
        url="https://www.linkedin.com/in/edin-kaymakqi-3243b3163/"
      />
    </section>
  </section>
)

export default Contact
