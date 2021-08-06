require("dotenv").config();

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  // try {
  //   await mongoose.connect(db, {
  //     useNewUrlParser: true,
  //   });

  //   console.log("MongoDB is Connected...");
  // } catch (err) {
  //   console.error(err.message);
  //   process.exit(1);
  // }
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => print(err));
};

module.exports = connectDB;
