import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User.js";

const router = express.Router();

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //'salt' is password difficulty
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("No user found");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Password mismatch");

    //To prevent password exposure we respond with all user data excluding password.
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
