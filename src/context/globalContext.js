import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react"

const initialState = {
  currentTheme:
    typeof window !== "undefined" &&
    window.localStorage.getItem("theme") === null
      ? "dark"
      : typeof window !== "undefined" && window.localStorage.getItem("theme"),
  cursorType: false,
  cursorStyles: ["pointer", "hovered"],
}
// Define context
const GlobalStateContext = createContext(initialState)
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, currentTheme: action.theme }
    case "CURSOR_TYPE":
      return { ...state, cursorType: action.cursorType }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// Custom hooks for when we want to use global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
