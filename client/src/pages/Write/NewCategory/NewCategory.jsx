import React, { useState } from "react";
import axios from "axios";

import "./NewCategory.css";

export const NewCategory = ({ handleCancel, fetchCats, categories }) => {
  const [newCat, setNewCat] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    const newCategory = {
      name: newCat,
    };

    try {
      const res = await axios.post("/categories", newCategory);
    } catch (err) {
      console.log(err);
    }
    fetchCats();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/categories/${id}`);
      console.log(`Deleted ${id}`);
    } catch (err) {
      console.log(err);
    }
    fetchCats();
  };

  return (
    <div className="newCatFormGroup">
      <input
        type="text"
        placeholder="Category name"
        className="NewCatInput"
        autoFocus={true}
        onChange={(e) => setNewCat(e.target.value)}
      />
      <div className="buttonsWrapper">
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <ul className="writeCats">
        <h3>Categories</h3>
        {categories.map((cat) => (
          <li>
            <i
              className="singlePostIcon far fa-trash-alt"
              onClick={() => handleDelete(cat._id)}
            ></i>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
