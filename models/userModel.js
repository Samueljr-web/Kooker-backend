const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please enter your fullname"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

mongoose.pluralize(null);
module.exports = mongoose.model("user", userSchema);
