import {useState, useCallback, useMemo} from "react"
import CartsList from "./components/carts/CartsList"
import Form from "./components/carts/Form"
import {sleep, fetchUser} from "./utils"
import AppStateContext from "./contexts/AppContext"

function App() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const addItem = userName => {
    if (items.find(v => v.login === userName)) {
      setError(`user ${userName} already exists`)
      return
    }
    setStatus("pending")
    setError(null)
    fetchUser(userName).then(
      item => {
        setItems(x => [...x, item])
        setStatus("resolved")
      },
      error => {
        setError(error)
        setStatus("rejected")
      },
    )
  }

  const deleteItem = useCallback(id => {
    if (!window.confirm("Are you sure ?")) return

    setItems(x => x.filter(v => v.id !== id))
  }, [])

  const value = useMemo(() => ({deleteItem}), [deleteItem])

  return (
    <div className="container">
      <Form isDisabled={status === "pending"} addItem={addItem} />
      {status === "pending" && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}

      <AppStateContext.Provider value={value}>
        <CartsList items={items} />
      </AppStateContext.Provider>
    </div>
  )
}

export default App
