const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const saltRounds = 10;

  if (!fullname || !email || !password) {
    res.status(400);
    throw new Error("please enter all details");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(401);
    throw new Error("a user with this email already exists");
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      fullname: user.fullname,
      email: user.email,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = { registerUser, loginUser };
