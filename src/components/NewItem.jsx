import { memo } from "react";

import { generate as id } from "shortid";
import PropTypes from "prop-types";
import { useState } from "react";

const NewItem = ({ addNewItem }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => setValue(() => target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewItem({ id: id(), value, packed: false });

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input
            className="form-control mb-3"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
};

NewItem.propTypes = {
  addNewItem: PropTypes.func.isRequired,
};

export default memo(NewItem);
