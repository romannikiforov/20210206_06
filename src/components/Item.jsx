import React, { PureComponent } from "react";
import "./Item.css";

class Item extends PureComponent {
  render() {
    console.log("Rerender");
    const { item, removeItem, toggleItem } = this.props;
    return (
      <li className="item-box">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.packed}
            onChange={() => toggleItem(item.id)}
            id={item.id}
          />
          <label className="form-check-label" htmlFor={item.id}>
            {" "}
            {item.value}
          </label>
        </div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default Item;
