/**
 * Education
 */

import React from "react"
import PropTypes from "prop-types"
import Caption from "./caption"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"


const Education = (props) => {
  const schools = props.items.map((school) =>
    <div key={school.name}>
      <h3>{school.name}</h3>
      <a>{school.degree}</a>
      <a>{school.year}</a>
    </div>
  );

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faGraduationCap} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>
      <div>{schools}</div>
    </div>
  )
}

Education.propsTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Education
