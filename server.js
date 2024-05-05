require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const userRouter = require("./routes/userRoutes");

const port = 8080 || process.env.port;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
