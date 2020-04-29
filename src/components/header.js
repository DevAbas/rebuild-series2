import React, { useEffect } from "react"
import Link from "gatsby-link"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

const Header = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    if (currentTheme) {
      window.localStorage.setItem("theme", currentTheme)
    }
  }, [currentTheme])

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">FURR</Link>
            <span onClick={toggleTheme}></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
