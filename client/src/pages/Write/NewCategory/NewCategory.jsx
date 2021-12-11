import React, { useState } from "react";
import axios from "axios";

import "./NewCategory.css";

export const NewCategory = ({ handleCancel, fetchCats }) => {
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
    handleCancel();
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
    </div>
  );
};
