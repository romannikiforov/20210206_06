import {Component} from "react"
import Item from "./Item"
import Filter from "./Filter"
import PropTypes from "prop-types"

class ListItems extends Component {
  state = {
    searchTerm: "",
  }

  updateFilter = searchTerm => this.setState({searchTerm})

  get isEmptyItmes() {
    const {items} = this.props
    const {searchTerm} = this.state

    return (
      (!items.length ||
        !items.filter(item =>
          item.value.toUpperCase().includes(searchTerm.toUpperCase()),
        ).length) && <p>No items</p>
    )
  }

  get body() {
    const {items} = this.props
    const {searchTerm} = this.state

    return items
      .filter(item =>
        item.value.toUpperCase().includes(searchTerm.toUpperCase()),
      )
      .map(item => <Item item={item} key={item.id} />)
  }

  render() {
    const {title} = this.props
    const {updateFilter, isEmptyItmes, body} = this

    return (
      <section>
        <h3 className="mb-3">{title}</h3>
        <Filter updateFilter={updateFilter} />
        <ul className="mb-3 p-0">{body}</ul>
        {isEmptyItmes}
      </section>
    )
  }
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default ListItems
