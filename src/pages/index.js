import React from "react"

// Global context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Components
import Layout from "../components/layout"
import HomeBanner from "../components/homePage/HomeBanner"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      <HomeBanner changeCursorType={onCursor} />
    </Layout>
  )
}

export default IndexPage
