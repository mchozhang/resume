/**
 * the header is containing a small color block and a language block
 */
import PropTypes from "prop-types"
import React from "react"
import "../style/header.css"
import chinesePic from "../images/chinese.svg"
import englishPic from "../images/english.svg"
import { useResume } from "./layout"


const Header = (props) => {
  const { setLanguage } = useResume();

  const setEnglish = () => {
    setLanguage("eng");
  }

  const setChinese = () => {
    setLanguage("cn");
  }

  return (
    <header className="header">
      {/* small colored square, the title is set to transparent */}
      <h1 className="title">
        {props.title}
      </h1>

      {/*languages*/}
      <div className="language-block" >
        <div>
          <a className="language" href="#" onClick={setEnglish}>
            <img src={englishPic} alt="Eng"/>
            English
          </a>
        </div>

        <div>
          <a className="language" href="#" onClick={setChinese}>
            <img src={chinesePic} alt="China"/>
            中文
          </a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
