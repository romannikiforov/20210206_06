import Cart from "./Cart"
import {useAppContext} from "../../contexts/AppContext"

const CartsList = () => {
  const state = useAppContext()
  return (
    <div className="cart-box">
      {state.items.map(item => (
        <Cart key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartsList
