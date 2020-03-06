/**
 * Skills section
 */

import React from "react"
import PropTypes from "prop-types"
import Caption from "./caption"
import TechStack from "./tech-stack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTasks } from "@fortawesome/free-solid-svg-icons"


const Skills = (props) => {
  const skills = props.items.map((skill) =>
    <div key={skill.title}>
      <h5>{skill.title}</h5>
      <TechStack content={skill.content}/>
    </div>
  );

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faTasks} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>

      <div>
        {skills}
      </div>
    </div>
  )
}

Skills.propsTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Skills
