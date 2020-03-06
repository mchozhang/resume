/**
 * Individual projects
 */
import React from "react"
import Project from "./project"
import Caption from "./caption"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileCode } from "@fortawesome/free-solid-svg-icons"

const Projects = (props) => {
  const projects = props.items.map((project) =>
    <Project key={project.name} content={project}/>,
  )

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faFileCode} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>

      <div>
        {projects}
      </div>
    </div>
  )
}

Projects.propsTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Projects
