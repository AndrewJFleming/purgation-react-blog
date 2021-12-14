import React, { useState } from "react";

export const AddCategories = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState(null);
  const [existsPrompt, setExistsPrompt] = useState(false);

  const handlePush = () => {
    const exists = categories.includes(newCategory);
    if (!exists && newCategory) {
      setCategories((categories) => [...categories, newCategory]);
      setNewCategory("");
    } else if (!newCategory) {
      console.log("blank");
    } else {
      setExistsPrompt(true);
      setTimeout(() => {
        setExistsPrompt(false);
      }, 3000);
      setNewCategory("");
    }
  };

  const handleRemove = (targetCat) => {
    const newArray = categories.filter((item) => item !== targetCat);
    setCategories(newArray);
  };

  return (
    <div className="writeFormGroup">
      <h3>Categories</h3>
      <div className="addCatWrapper">
        <div className="addCatLeft">
          <input
            type="text"
            placeholder="Category name"
            className="addCatInput"
            value={newCategory}
            autoFocus={true}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <span className="addCat" onClick={() => handlePush(newCategory)}>
            Add
          </span>
          {existsPrompt && <p className="existsPrompt">Already exists...</p>}
        </div>
        <div className="addCatRight">
          <ul className="catList">
            <h4>Categories to be added:</h4>
            {categories.length ? (
              categories.map((cat) => (
                <li>
                  <i
                    className="writeCatIcon far fa-trash-alt"
                    onClick={() => handleRemove(cat)}
                  ></i>
                  <label>{cat}</label>
                </li>
              ))
            ) : (
              <p className="noCats">Nothing added yet...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
