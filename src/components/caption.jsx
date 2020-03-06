/**
 * section header
 */
import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import Education from "./education"

const Caption = (props) => {
  return (
      <h2 style={{ color: `#01579B`, display: `inline-block` }}>
        {props.children}
      </h2>
  )
}

export default Caption
