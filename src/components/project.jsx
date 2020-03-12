/**
 * Project
 */
import React from "react"
import "../style/project.css"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle, faToolbox } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import TechStack from "./tech-stack"


const Project = (props) => {
  const details = props.content.details.map((detail) =>
    <li key={detail}>
      <p>{detail}</p>
    </li>,
  )

  return (
    <div className="project">
      {/*header*/}
      <div className="project-header">
        <h4>{props.content.name}</h4>

        {/*info*/}
        {props.content.info != null && <p>{props.content.info}</p>}
      </div>

      {/*demo link*/}
      {props.content.demo != null &&
      <div title="demo">
        <a href={props.content.demo} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPlayCircle} size={"sm"}/>
          &nbsp;Demo: {props.content.demo}
        </a>
      </div>
      }

      {/*github*/}
      {props.content.github != null &&
      <div title="github repo link">
        <a href={props.content.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size={"sm"}/>
          &nbsp;Github: {props.content.github}
        </a>
      </div>
      }

      {/*technology stack*/}
      {props.content.techStack != null &&
      <div title="technology stack" className="tech-stack">
        <a>
          <FontAwesomeIcon icon={faToolbox} size={"sm"}/>
          &nbsp;Tech-stack:
        </a>
        <TechStack content={props.content.techStack}/>
      </div>
      }

      {/*description*/}
      <div>
        <p className="description">
          {props.content.des}
        </p>
      </div>

      {/*details*/}
      <div className="details">
        <ul>
          {details}
        </ul>
      </div>

    </div>
  )
}

Project.propsTypes = {
  content: PropTypes.any,
}

export default Project
