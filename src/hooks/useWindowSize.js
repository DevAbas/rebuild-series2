import { useState, useEffect } from "react"

export default function useWindowSize() {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    if (!isClient) {
      return false
    }

    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWindowSize(getSize()), 150)
    }

    window.addEventListener("resize", resizeListener)
    return () => window.removeEventListener("resize", resizeListener)
  }, [isClient, setWindowSize]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
