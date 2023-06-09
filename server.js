const express = require("express");
const path = require("path");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const User = require("./models/userModels");
// const registrationRouter = require("./routes/registrationRouter");
// const loginRouter = require("./routes/loginRouter");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

// Set Template Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// //load Routes
// app.use("/", registrationRouter);
// app.use("/login", loginRouter);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/", (req, res) => {
  res.render("register");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
