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

////////////////
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "./my-app/build")));

  app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname + "/my-app/build/index.html"));
  });
} else console.log(process.env.NODE_ENV);

///////////////////

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api/books", books);

console.log("env port" + process.env.PORT);
console.log("node env " + process.env.NODE_ENV);

let PORT;
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT;
} else PORT = 8082;

console.log("port = ", PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT || 8082, () => console.log(`Server running on port ${PORT}`));
