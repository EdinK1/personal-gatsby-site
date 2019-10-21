import React from "react"

const ContactItem = ({ text, Icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Icon />
    {text}
  </a>
)
export default ContactItem
