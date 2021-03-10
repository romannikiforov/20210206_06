import PropTypes from "prop-types"
import {memo} from "react"

const Filter = ({updateFilter}) => {
  return (
    <div className="mb-3">
      <input type="text" className="form-control" onChange={updateFilter} />
    </div>
  )
}

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
}

export default memo(Filter)
