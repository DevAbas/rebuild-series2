import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Components
import Header from "./header"
import CustomCursor from "./CustomCursor"
import Navigation from "../components/navigation"

// Styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *{
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    scroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const dispatch = useGlobalDispatchContext()
  const { currentTheme, cursorStyles } = useGlobalStateContext()

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
  }

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        changeCursorType={onCursor}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        changeCursorType={onCursor}
      />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
