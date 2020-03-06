/**
 *
 */
import React from "react"
import PropTypes from "prop-types"

const TechStack = (props) => {
  const techniques = props.content.split(", ").map(
    (tech) =>
      <a key={tech} style={{ display: "inline-block" }}>
        {tech}
      </a>
  )

  return (
    <div>
      {techniques}
    </div>
  )
}

TechStack.propsTypes = {
  content: PropTypes.string,
}

export default TechStack
