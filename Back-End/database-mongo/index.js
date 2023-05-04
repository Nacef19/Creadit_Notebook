const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/CreditTrackerDB";

mongoose.connect(
  mongoUri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB connected");
  },
);
const db = mongoose.connection;

module.exports = db;
