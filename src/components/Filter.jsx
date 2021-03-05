import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="mb-3">
        <input
          onChange={this.props.onChange}
          value={this.props.searchTerm}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
}

export default Filter;
