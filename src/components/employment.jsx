/**
 * Contact information
 */
import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faCalendarAlt, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import Project from "./project"
import Caption from "./caption"

const Employment = (props) => {
  const companies = props.items.map((company) =>
    <div key={company.name}>
      {/*company header*/}
      <div>
        <h5 className="company-info">{company.name}</h5>

        <div className="company-info">
          <FontAwesomeIcon icon={faMapMarkerAlt}/>
          <a> {company.city}</a>
        </div>

        <div className="company-info">
          <FontAwesomeIcon icon={faCalendarAlt}/>
          <a> {company.year}</a>
        </div>
      </div>

      {/*projects*/}
      {
        company.projects.map((project) =>
          <Project key={project.name} content={project}/>
        )
      }
    </div>
  )

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faBriefcase} size={"sm"}/>
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
