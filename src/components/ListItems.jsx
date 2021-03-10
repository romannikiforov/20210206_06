import Item from "./Item"
import Filter from "./Filter"
import PropTypes from "prop-types"
import {useState, memo, useCallback} from "react"

const ListItems = ({title, items}) => {
  const [search, setSearch] = useState("")

  const updateFilter = useCallback(
    ({target}) => setSearch(() => target.value),
    [],
  )

  const isEmptyItmes = () =>
    (!items.length ||
      !items.filter(item =>
        item.value.toUpperCase().includes(search.toUpperCase()),
      ).length) && <p>No items</p>

  const body = () => {
    return items
      .filter(item => item.value.toUpperCase().includes(search.toUpperCase()))
      .map(item => <Item item={item} key={item.id} />)
  }

  return (
    <section>
      <h3 className="mb-3">{title}</h3>
      <Filter updateFilter={updateFilter} />
      <ul className="mb-3 p-0">{body()}</ul>
      {isEmptyItmes()}
    </section>
  )
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(ListItems)
