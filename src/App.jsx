import {Component} from "react"
import NewItem from "./components/NewItem"
import ListItems from "./components/ListItems"
import {defaultState} from "./data"
import AppContext from "./contexts/AppContext"

class App extends Component {
  state = {data: defaultState}

  toggle = id =>
    this.setState(x =>
      x.data.map(item =>
        item.id === id ? {...item, packed: (item.packed = !item.packed)} : item,
      ),
    )

  addNewItem = newItem =>
    this.setState(({data}) => ({data: [...data, newItem]}))

  delItem = id =>
    this.setState(({data}) => ({data: data.filter(item => item.id !== id)}))

  unpackedALL = () =>
    this.setState(({data}) => ({
      data: data.map(item => (item.packed ? {...item, packed: false} : item)),
    }))

  unpackedFilter = () => this.state.data.filter(item => !item.packed)

  packedFilter = () => this.state.data.filter(item => item.packed)

  render() {
    const {
      unpackedFilter,
      packedFilter,
      toggle,
      addNewItem,
      delItem,
      unpackedALL,
    } = this

    return (
      <div className="container py-3">
        <NewItem addNewItem={addNewItem} />
        <div className="row">
          <AppContext.Provider value={{delItem, toggle}}>
            <div className="col-md-5">
              <ListItems
                title="Unpacked Items"
                items={unpackedFilter()}
                toggle={toggle}
                delItem={delItem}
              />
            </div>
            <div className="offset-md-2 col-md-5">
              <ListItems
                title="Packed Items"
                items={packedFilter()}
                toggle={toggle}
                delItem={delItem}
              />
              <button
                className="btn btn-danger btn-lg btn-block"
                onClick={unpackedALL}
              >
                Mark All As Unpacked
              </button>
            </div>
          </AppContext.Provider>
        </div>
      </div>
    )
  }
}

export default App
