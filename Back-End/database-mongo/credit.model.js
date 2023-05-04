const mongoose = require("mongoose");
const db = require("./index.js");

const creditSchema = new mongoose.Schema({
  id: Number,
  customerName: String,
  credit: Number,
  updatedDate: Date
});

const Credit = mongoose.model("Credit", creditSchema);

module.exports = Credit;