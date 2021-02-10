const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);