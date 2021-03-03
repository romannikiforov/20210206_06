import Cart from "./Cart"

const CartsList = ({items}) => {
  return (
    <div className="cart-box">
      <Cart item={items[0]} />
      <Cart item={items[1]} />
    </div>
  )
}

export default CartsList
