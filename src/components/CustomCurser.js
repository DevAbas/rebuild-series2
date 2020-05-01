import React, { useState, useEffect } from "react"

import { Cursor } from "../styles/globalStyles"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 })

  const handleChangeMousePosition = event => {
    const { pageX, pageY } = event
    setMousePosition({ x: pageX, y: pageY })
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleChangeMousePosition)

    return () =>
      document.removeEventListener("mousemove", handleChangeMousePosition)
  })

  return (
    <>
      <Cursor
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}

export default CustomCursor
