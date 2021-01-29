/**
 * awards
 */
import React from "react"
import "../style/awards.css"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"
import Caption from "./caption"

const Awards = (props) => {
  const awards = props.items.map((award) =>
    <div key={award.name} className="award">
      <h3 className="award-name">
        {award.name}
      </h3>

      <p>
        Ratio: {award.ratio}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Year: {award.date}
      </p>
    </div>,
  )

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faAward} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>

      {/* awards */}
      <div>
        {awards}
      </div>
    </div>
  )
}

Awards.propsTypes = {
  content: PropTypes.any,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Awards