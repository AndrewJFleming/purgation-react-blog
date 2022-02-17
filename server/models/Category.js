import mongoose from "mongoose";

/*
I plan to phase out the category collection for this project
*/

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model("Category", categorySchema);
