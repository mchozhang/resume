/**
 *
 */
import React from "react"
import "../style/tech-stack.css"
import PropTypes from "prop-types"

const TechStack = (props) => {
  const techniques = props.content.split(", ").map(
    (tech) =>
      <a key={tech} className="tech">
        {tech}
      </a>
  )

  return (
    <div className="stack">
      {techniques}
    </div>
  )
}

TechStack.propsTypes = {
  content: PropTypes.string,
}

export default TechStack
