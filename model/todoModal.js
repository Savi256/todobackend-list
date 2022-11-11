const moment = require("moment");

const mongoose = require("mongoose");

const model = new mongoose.Schema({
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SIGNUPDETAILS"
  },
  title:{
    type:String,
  },
  Note: {
    type: String,
  },
  timestamp: {
    type: String,
    default: moment().toISOString(),
  },
  // date:{
  //   type:String,
  //   default:moment.toString()
  // },
  lastseen:{
type:String
  }
});
model.methods.timeda = function () {
    const m2=moment()
    const m1_m2=moment.duration(m2.diff(this.timestamp)).humanize()
  return `${m1_m2} ago`;
};
// scheme.pre("save", async function (next) {
//     if (this.isModified("list")) {
//       const hash = await bcrypt.hash(this.token, 8);
//       this.token = hash;
//     }
//     next();
//   });
//   scheme.methods.compareToken = async function (token) {
//     const result = await bcrypt.compareSync(token, this.token);
//     return result;
//   };
const Tododocument = mongoose.model("todocluster1", model);

module.exports = Tododocument;
