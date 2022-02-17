import express from "express";

import Category from "../models/Category.js";

const router = express.Router();

//CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CATEGORY
router.delete("/:id", async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    try {
      await cat.delete();
      res.status(200).json("Category has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json("Couldn't find matching category");
  }
});

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
