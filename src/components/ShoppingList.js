import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch ] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredItems = () => {
    if (search === "") {
      return items
    } else {
      return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
  }
  
  const itemsToDisplay = filteredItems().filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
