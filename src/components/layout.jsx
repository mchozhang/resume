/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../style/layout.css"

const Layout = (props) => {

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
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>

      <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}>
        <main>{props.children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
