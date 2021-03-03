import CartsList from "./components/carts/CartsList"
import items from "./data"

function App() {
  return (
    <div className="container">
      <CartsList items={items} />
    </div>
  )
}

export default App
