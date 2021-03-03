import {useState} from "react"
import CartsList from "./components/carts/CartsList"
import Form from "./components/carts/Form"

function App() {
  const [items, setItems] = useState([])

  const addItem = userName => {
    console.log(userName)
  }

  return (
    <div className="container">
      <Form addItem={addItem} />
      <CartsList items={items} />
    </div>
  )
}

export default App
