const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    bname: {
      type: String,
      required: [true, "Please add the your business name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already registered : "],
    },
    password: {
      type: String,
      required: [true, "Please add the user password "],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
