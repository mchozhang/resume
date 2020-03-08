import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Name from "../components/name"
import Contact from "../components/contact"
import Summary from "../components/summary"
import Employment from "../components/employment"
import Education from "../components/education"
import content from "../resume.yaml"
import Projects from "../components/Projects"
import Skills from "../components/skills"


const IndexPage = () => (

  <Layout>
    <SEO title="Wenhao's Resume" />

    <Name>{content.info.name}</Name>

    <Contact content={content.info} />

    <Summary title={content.summary.title} items={content.summary.items}/>

    <Education title={content.education.title} items={content.education.items}/>

    <Employment title={content.employment.title} items={content.employment.items}/>

    <Projects title={content.projects.title} items={content.projects.items}/>

    <Skills title={content.skills.title} items={content.skills.items}/>
  </Layout>
);

export default IndexPage
