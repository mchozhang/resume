import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Name from "../components/name"
import Contact from "../components/contact"
import Summary from "../components/summary"
import Employment from "../components/employment"
import Education from "../components/education"
import Projects from "../components/Projects"
import Skills from "../components/skills"
import Awards from "../components/awards"
import { ResumerProvider, useResume } from "../components/resume-context"
import Menu from "../components/menu"
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false

const MainPage = (props) => {
  const { content } = useResume()

  return (
    <>
      <Menu content={content}/>
      <Layout>
        <SEO title="Wenhao's Resume"/>

        <Name> {content.info.name}</Name>
        <Contact content={content.info}/>

        <div id="summary">
          <Summary title={content.summary.title} items={content.summary.items}/>
        </div>

        <div id="education">
          <Education title={content.education.title} items={content.education.items}/>
        </div>

        <div id="employment">
          <Employment title={content.employment.title} items={content.employment.items}/>
        </div>

        <div id="projects">
          <Projects title={content.projects.title} items={content.projects.items}/>
        </div>

        <div id="skills">
          <Skills title={content.skills.title} items={content.skills.items}/>
        </div>

        <div id="awards">
          <Awards title={content.awards.title} items={content.awards.items}/>
        </div>
      </Layout>

    </>
  )
}

const IndexPage = (props) => {
  return (
    <ResumerProvider>
      <MainPage/>
    </ResumerProvider>
  )
}

export default IndexPage
