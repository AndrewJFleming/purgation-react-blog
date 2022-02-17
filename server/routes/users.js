import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User.js";
import Post from "../models/Post.js";

const router = express.Router();

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        //Value of _id to query by
        req.params.id,
        //Update everything included in request body
        {
          $set: req.body,
        },
        //Options: Return modified doc rather than orig
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update the account belonging to you.");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        //Additionally, delete all posts belonging to user.
        await Post.deleteMany({ username: user.username });
        //Delete user.
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete the account belonging to you.");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //To prevent password exposure we respond with all user data excluding password.
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
