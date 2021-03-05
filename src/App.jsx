import React, { Component } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

class App extends Component {
  state = {
    items: defaultState,
  };

  addItem = (newItem) =>
    this.setState(({ items }) => ({
      items: [newItem, ...items],
    }));

  removeItem = (id) =>
    this.setState(({ items }) => ({
      items: items.filter((item) => item.id !== id),
    }));

  toggleItem = (id) =>
    this.setState(({ items }) => ({
      items: items.map((item) =>
        item.id !== id ? item : { ...item, packed: !item.packed }
      ),
    }));

  markAllUnPacked = () =>
    this.setState(({ items }) => ({
      items: items.map((item) =>
        item.packed ? { ...item, packed: false } : item
      ),
    }));

  render() {
    const { items } = this.state;
    const packedItems = items.filter((item) => item.packed);
    const unPackedItems = items.filter((item) => !item.packed);
    return (
      <div className="container py-3">
        <NewItem addItem={this.addItem} />
        <div className="row">
          <div className="col-md-5">
            <ListItems
              title="Unpacked Items"
              items={unPackedItems}
              removeItem={this.removeItem}
              toggleItem={this.toggleItem}
            />
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems
              title="Packed Items"
              removeItem={this.removeItem}
              toggleItem={this.toggleItem}
              items={packedItems}
            />
            <button
              onClick={this.markAllUnPacked}
              className="btn btn-danger btn-lg btn-block"
            >
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
