/**
 * floating navigation bar
 */
import React from "react"
import "../style/menu.css"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const Menu = (props) => {
  let content = props.content

  return (
    <nav className="menu">
      <p>Table of Contents</p>
      <ul>
        <li><a href="#summary">{content.summary.title}</a></li>
        <li><a href="#education">{content.education.title}</a></li>
        <li><a href="#employment">{content.employment.title}</a></li>
        <li><a href="#projects">{content.projects.title}</a></li>
        <li><a href="#skills">{content.skills.title}</a></li>
        <li><a href="#awards">{content.awards.title}</a></li>
        <li>
          <a href="#" style={{textAlign: 'center'}}>
            <FontAwesomeIcon icon={faArrowUp}/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

Menu.propsTypes = {
  content: PropTypes.any,
}

export default Menu