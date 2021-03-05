import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class ListItems extends Component {
  state = {
    searchTerm: "",
  };

  updateFilter = (e) => this.setState({ searchTerm: e.target.value });

  render() {
    const { searchTerm } = this.state;
    const { title } = this.props;
    return (
      <section>
        <h3 className="mb-3">{title}</h3>
        <Filter filter={searchTerm} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">{this.getBody}</ul>
      </section>
    );
  }

  get getBody() {
    const { searchTerm } = this.state;
    const { items, removeItem, toggleItem } = this.props;

    return items
      .filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item) => (
        <Item
          key={item.id}
          item={item}
          toggleItem={toggleItem}
          removeItem={removeItem}
        />
      ));
  }
}

export default ListItems;
