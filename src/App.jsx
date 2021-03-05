import {useState} from "react"
import CartsList from "./components/carts/CartsList"
import Form from "./components/carts/Form"
import {sleep, fetchUser} from "./utils"

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

  return (
    <div className="container">
      <Form isDisabled={status === "pending"} addItem={addItem} />
      {status === "pending" && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}

      <CartsList items={items} />
    </div>
  )
}

export default App
