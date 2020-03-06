/**
 * Project
 */
import React from "react"
import PropTypes from "prop-types"

const Project = (props) => {
  const details = props.content.details.map((detail) =>
      <li key={detail}>
        <p>{detail}</p>
      </li>
  );

  return (
    <div>
      {/*header*/}
      <div className="project-header">
        <h4>{props.content.name}</h4>

        {/*info*/}
        {props.content.info != null && <p>{props.content.info}</p> }
      </div>


      {props.content.demo != null &&
        <div>
          <p>{props.content.demo}</p>
        </div>
      }

      {/*description*/}
      <div>
        <p>
          {props.content.des}
        </p>
      </div>

      {/*details*/}
      <div>
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
