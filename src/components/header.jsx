import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import chinesePic from "../images/chinese.svg"
import englishPic from "../images/english.svg"


const Header = (props) => (
  <header style={{ background: `#ffffff00` }}>
    <div style={{
      maxWidth: 960,
      maxHeight: 20,
      margin: `0 auto`,
      marginBottom: `0.8rem`,
      padding: `0rem 1.0875rem`,
      display: `flex`,
      justifyContent: `space-between`,
    }}
    >
      {/*small colored square*/}
      <h1 style={{
        width: `40%`,
        color: `#ffffff00`,
        display: `block`,
        backgroundColor: `#01579B`,
      }}>
        {props.author}
      </h1>

      {/*languages*/}
      <div style={{
        display: `inline`,
        backgroundColor: `#fff44f00`,
        textAlign: `right`,
        marginTop: "5px",

      }}>

        <div style={{
          display: `inline-block`,
        }}>
          <a style={{
            fontSize: `smaller`,
            marginTop: 5,
            marginRight: 10,
            display: `flex`,
            lineHeight: 1.4,
          }}>
            <img src={englishPic} alt="Eng"
                 style={{
                   display: "inline-block",
                   marginRight: 5,
                 }}
                 width="20" height="20"/>
            English
          </a>
        </div>

        <div style={{
          display: `inline-block`,
        }}>
          <a style={{
            fontSize: "smaller",
            marginTop: 5,
            display: `flex`,
            lineHeight: 1.4,
          }}>
            <img src={chinesePic} alt="China"
                 style={{
                   display: "inline-block",
                   marginRight: 5,
                 }}
                 width="20" height="20"/>
            中文
          </a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  author: ``,
}

export default Header
