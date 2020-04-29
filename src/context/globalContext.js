import React, { createContext, useReducer, useContext } from "react"

// Define context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, currentTheme: action.theme }
    default: {
      throw new Error("Unhandled action type: ${action.type}")
    }
  }
}

const initialState = {
  currentTheme:
    window.localStorage.getItem("theme") === null
      ? "dark"
      : window.localStorage.getItem("theme"),
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