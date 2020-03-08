/**
 * Contact information
 */
import React from "react"
import PropTypes from "prop-types"
import "../style/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact = (props) => {
  return (
    <div className="contact">
      {/*email*/}
      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} size={"sm"}/>
        <a> {props.content.email}</a>
      </div>

      {/*phone*/}
      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} size={"sm"}/>
        <a> {props.content.phone}</a>
      </div>

      {/*github*/}
      <div className="contact-item">
        <FontAwesomeIcon icon={faGithub} size={"sm"}/>
        <a href={`https://` + props.github}
           target="_blank"
           rel="noopener noreferrer"> {props.content.github}</a>
      </div>

      {/*linked-in*/}
      <div className="contact-item">
        <FontAwesomeIcon icon={faLinkedin} size={"sm"}/>
        <a href={`https://` + props.linkedin}
           target="_blank"
           rel="noopener noreferrer"> {props.content.linkedin}</a>
      </div>
    </div>
  )
}

Contact.propsTypes = {
  content: PropTypes.any,
}

export default Contact
