/**
 * section header
 */
import React from "react"
import "../style/caption.css"

const Caption = (props) => {
  return (
      <h2 className="caption">
        {props.children}
      </h2>
  )
}

export default Caption
