import React, {Component} from "react"
import {generate as id} from "shortid"
import PropTypes from "prop-types"

class NewItem extends Component {
  state = {
    value: "",
  }

  handleChange = ({target}) => this.setState(x => ({...x, value: target.value}))

  handleSubmit = e => {
    const {addNewItem} = this.props
    const {value} = this.state

    e.preventDefault()

    addNewItem({id: id(), value, packed: false})

    this.setState({value: ""})
  }

  render() {
    const {value} = this.state
    const {handleChange, handleSubmit} = this

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
    )
  }
}

NewItem.propTypes = {
  addNewItem: PropTypes.func.isRequired,
}

export default NewItem
