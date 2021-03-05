import {createContext, useReducer, useContext} from "react"
import {fetchUser, sleep} from "../utils"

const AppStateContext = createContext()

const initialState = {
  items: [],
  status: "idle",
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return {...state, status: "pending", error: null}
    case "resolved":
      return {
        ...state,
        items: [...state.items, action.item],
        status: "resolved",
        error: null,
      }
    case "rejected":
      return {...state, error: action.error, status: "rejected"}
    case "itemDeleted":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      }
    default:
      throw Error("no cases")
  }
}

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = [state, dispatch]
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw Error("useAppContext must be call within AppContext")
  }
  return context
}

export const useAddItem = () => {
  const [state, dispatch] = useAppContext()
  const {items} = state

  function addItem(userName) {
    if (items.find(v => v.login === userName)) return
    dispatch({type: "pending"})

    fetchUser(userName).then(
      item => dispatch({type: "resolved", item}),
      error => dispatch({type: "rejected", error}),
    )
  }

  return {state, addItem}
}

export default AppStateContext
