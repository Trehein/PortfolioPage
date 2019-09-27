import { ThemeProvider } from 'styled-components'
import { BaseTheme as theme } from '../themes/BaseTheme'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import Header from "./header"
import NavBar from './Element/NavBar/NavBar'
import "./layout.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <NavBar />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `110px 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built by Trevor Hein
            </footer>
          </div>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
