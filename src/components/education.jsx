/**
 * Education
 */

import React from "react"
import PropTypes from "prop-types"
import Caption from "./caption"
import "../style/education.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"

const Education = (props) => {
  const schools = props.items.map((school) =>
    <div key={school.name} className="school">
      <h3>
        {school.name}
      </h3>
      <div>
        <p className="degree">
          {school.degree}
        </p>

        <p className="year">
          {school.year}
        </p>
      </div>
    </div>,
  )

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faGraduationCap} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>

      {/*schools*/}
      <div>
        {schools}
      </div>
    </div>
  )
}

Education.propsTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Education
