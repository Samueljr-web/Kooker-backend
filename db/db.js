const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("db connected successfully");
  } catch (error) {
    console.error("failed to connect to db", error);
    process.exit(1);
  }
};

module.exports = connectDB;
