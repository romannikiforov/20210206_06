import "./Item.css";
import PropTypes from "prop-types";
import { memo, useContext } from "react";
import AppContext from "../contexts/AppContext";

const Item = ({ item }) => {
  const { id, value, packed } = item;

  const { toggle, delItem } = useContext(AppContext);
  console.log("Rerender");
  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={packed}
          onChange={() => toggle(id)}
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {" "}
          {value}
        </label>
      </div>
      <button className="btn btn-secondary btn-sm" onClick={() => delItem(id)}>
        Remove
      </button>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default memo(Item);
