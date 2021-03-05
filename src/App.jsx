import CartsList from "./components/carts/CartsList"
import Form from "./components/carts/Form"
import {AppProvider} from "./contexts/AppContext"

function App() {
  return (
    <div className="container">
      <AppProvider>
        <Form />
        <CartsList />
      </AppProvider>
    </div>
  )
}

export default App
