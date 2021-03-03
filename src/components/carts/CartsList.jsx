import PropTypes from "prop-types"
import Cart from "./Cart"

const CartsList = ({items}) => {
  return (
    <div className="cart-box">
      {items.map(item => (
        <Cart key={item.id} item={item} />
      ))}
    </div>
  )
}

CartsList.propTypes = {
  items: PropTypes.array.isRequired,
}

CartsList.defaultProps = {
  items: [],
}

export default CartsList
