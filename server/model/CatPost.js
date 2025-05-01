const mongoose = require("mongoose");

const catPostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date().toLocaleString(),
    },
  },
  {
    timestamps: true,
  }
);

const CatPost = mongoose.model("CatPost", catPostSchema);

module.exports = CatPost;
