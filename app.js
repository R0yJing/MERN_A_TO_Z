const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const books = require("cors");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./models/Book");
require("./routes/api/books.js"); // (app);

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api/books", books);

console.log("env port" + process.env.PORT);

const PORT = process.env.PORT;
console.log("port = ", PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////////////////
app.use(express.static(path.resolve(__dirname, "./my-app/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./my-app/build", "index.html"));
});

///////////////////
app.listen(PORT || 8082, () => console.log(`Server running on port ${PORT}`));
