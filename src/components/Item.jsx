import React, {PureComponent} from "react"
import "./Item.css"
import PropTypes from "prop-types"
import AppContext from "../contexts/AppContext"

class Item extends PureComponent {
  render() {
    console.log("Rerender")
    const {item} = this.props
    const {id, value, packed} = item

    return (
      <AppContext.Consumer>
        {({delItem, toggle}) => (
          <li className="item-box">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={packed}
                onChange={e => toggle(e.target.id)}
                id={id}
              />
              <label className="form-check-label" htmlFor={id}>
                {" "}
                {value}
              </label>
            </div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => delItem(id)}
            >
              Remove
            </button>
          </li>
        )}
      </AppContext.Consumer>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item
