import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import chinesePic from "../images/chinese.svg"

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
        width: `auto`,
        color: `#ffffff00`,
        // lineHeight: `0`,
        display: `block`,
        backgroundColor: `#01579B`,
      }}>
        {props.author}
      </h1>

      {/*languages*/}
      {/*<div style={{*/}
      {/*  width: `fit-content`,*/}
      {/*  display: `inline`,*/}
      {/*  backgroundColor: `#fff44f00`,*/}
      {/*  textAlign: `right`,*/}
      {/*  marginTop: "5px"*/}

      {/*}}>*/}
      {/*  <a style={{*/}
      {/*    fontFamily: `sans-serif`,*/}
      {/*    fontSize: "smaller",*/}
      {/*    display: `flex`,*/}
      {/*    justifyContent: `center`,*/}
      {/*  }}>*/}
      {/*    <img src={chinesePic} alt="China"*/}
      {/*         width="20" height="20"/>*/}
      {/*    中文*/}
      {/*  </a>*/}
      {/*</div>*/}
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
