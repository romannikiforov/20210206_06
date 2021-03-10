import React, {Component} from "react"
import PropTypes from "prop-types"

class Filter extends Component {
  render() {
    const {updateFilter} = this.props

    return (
      <div className="mb-3">
        <input
          onChange={e => updateFilter(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
    )
  }
}

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
}

export default Filter
