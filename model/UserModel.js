const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    // unique: true,
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
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
});

// details.virtual("fullname").get(function () {
//   return this.firstname + " " + this.lastname;
// });

details.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashed = await bcrypt.hash(this.password, 8);
    this.password = hashed;
  }
  next();
});
details.methods.comparepassword = async function (password) {
  const compare = await bcrypt.compareSync(password, this.password);
  return compare;
};

const Saveddetails = mongoose.model("SIGNUPDETAILS", details);

module.exports = Saveddetails;
