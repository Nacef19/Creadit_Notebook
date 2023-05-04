const express = require("express");
const creditRoutes = require('./routes/credit.routes')
const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/creditTracker", creditRoutes);

app.listen(PORT, function () {
  console.log("Listening on port 3000!");
});
