import {createContext, useReducer, useContext} from "react"
import {fetchUser} from "../utils"

const AppStateContext = createContext()
const AppDispatchContext = createContext()

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

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
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

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext)
  if (!context) {
    throw Error("AppDispatchContext must be call within AppContext")
  }
  return context
}

export const useAppAndDiapatchContext = () => [
  useAppContext(),
  useAppDispatch(),
]

export const useAddItem = () => {
  const state = useAppContext()
  const dispatch = useAppDispatch()
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

export const useDeleteItem = () => {
  const dispatch = useAppDispatch()
  return function (id) {
    if (!window.confirm("Are you sure ?")) {
      return
    }
    dispatch({type: "itemDeleted", id})
  }
}

export default AppStateContext
