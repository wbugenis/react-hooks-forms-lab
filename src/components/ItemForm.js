import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  const handleItemSubmit = (event) =>{
    event.preventDefault()
    const newItem = { name, category, id:name}
    onItemFormSubmit(newItem)
    setName("")
    setCategory("Produce")
  }

  const onSetCategory = (event) => {
    setCategory(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onSetCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
