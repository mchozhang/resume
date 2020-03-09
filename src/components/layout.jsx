/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 */

import React, { createContext, useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../style/layout.css"
import englishResume from "../data/resume.yaml"
import chineseResume from "../data/resume-zh.yaml"

const ResumeContext = createContext({ content: englishResume })
const useResume = () => useContext(ResumeContext);

const Layout = (props) => {
  const [content, setLanguage] = useState(englishResume)

  /**
   * language changed
   * @param lang language name
   */
  const handleLanguageChanged = (lang) => {
    if (lang === "eng") {
      setLanguage(englishResume);
    }  else if (lang === "cn") {
      setLanguage(chineseResume);
    }
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ResumeContext.Provider value={{
      content: content,
      setLanguage: handleLanguageChanged,
    }}>
      <Header siteTitle={data.site.siteMetadata.title}/>

      <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}>
        <main>{props.children}</main>
      </div>
    </ResumeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout, ResumeContext, useResume }
