/**
 * Summary
 */
import React from "react"
import PropTypes from "prop-types"
import Caption from "./caption"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"

const Summary = (props) => {
  const items = props.items.map((item) =>
    <li key={item}>
      <p>{item}</p>
    </li>,
  )

  return (
    <div>
      <Caption>
        <FontAwesomeIcon icon={faAddressBook} size={"sm"}/>
        &nbsp;{props.title}
      </Caption>

      <div>
        <ul>
          {items}
        </ul>
      </div>
    </div>
  )
}

Summary.propsTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Summary
