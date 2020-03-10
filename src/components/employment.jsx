/**
 * Contact information
 */
import React from "react"
import PropTypes from "prop-types"
import "../style/employment.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faCalendarAlt, faBuilding } from "@fortawesome/free-solid-svg-icons"
import Project from "./project"
import Caption from "./caption"

const Employment = (props) => {
  const companies = props.items.map((company) =>
    <div key={company.name}>
      {/*company header*/}
      <div className="company-header">
        <h3 className="company-info company-name">{company.name}</h3>

        <div className="company-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} size={"sm"}/>
          <a> {company.city}</a>
        </div>

        <div className="company-info">
          <FontAwesomeIcon icon={faCalendarAlt} size={"sm"}/>
          <a> {company.date}</a>
        </div>
      </div>

      <hr className="divider"/>

      {/*projects*/}
      {
        company.projects.map((project) =>
          <Project key={project.name} content={project} />
        )
      }
    </div>
  )

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faBuilding} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>
      {companies}
    </div>
  )
}

Employment.propsTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Employment
