/**
 * context
 */
import React, { createContext, useContext, useState } from "react"
import englishResume from "../data/resume.yaml"
import chineseResume from "../data/resume-zh.yaml"

const ResumeContext = createContext({ content: englishResume });
const useResume = () => useContext(ResumeContext);
const ResumerProvider = (props) => {
  const [content, setLanguage] = useState(englishResume);

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

  return (
    <ResumeContext.Provider value={{
      content: content,
      setLanguage: handleLanguageChanged,
    }}>
      {props.children}
    </ResumeContext.Provider>
  )
}

export { useResume, ResumerProvider }
