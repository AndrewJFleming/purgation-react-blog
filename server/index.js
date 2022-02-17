import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
// import nodemailer from "nodemailer";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
/*
I plan to phase out the category collection for this project
*/
import categoryRoute from "./routes/categories.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

//Greeting route
app.get("/", (req, res) => {
  res.send("Hello world...");
});

// app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  //Specify save location for image file
  destination: (req, file, cb) => {
    //Callback takes care of errors
    cb(null, "images");
  },
  //Save filename provided by name val in req body
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

//Actual upload part of image upload process
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
/*
I plan to phase out the category collection for this project
*/
app.use("/api/categories", categoryRoute);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
