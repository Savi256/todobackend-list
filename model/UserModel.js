const mongoose = require("mongoose");

const details = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// details.virtual("fullname").get(function () {
//   return this.firstname + " " + this.lastname;
// });

const Saveddetails = mongoose.model("SIGNUPDETAILS", details);

module.exports = Saveddetails;
