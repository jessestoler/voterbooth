const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  blog: { type: String, required: true }

});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;