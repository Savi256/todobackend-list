//INSTALL AND IMPORT YOUR MODULES
const express = require("express");
const moment = require("moment");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

// ASSIGN THESE MODULES TO A VARIABLE CONTAINERdddddd
const app = express();
app.use(express.json());

app.use(
  cors({
    // origin: "http://localhost:3000",
    // origin: "https://tapp-todo-list.herokuapp.com",
    origin: "https://tapp-todo-list.herokuapp.com",
  })
);

dotenv.config({ path: ".env" });

const Port = process.env.PORT;
const uri = process.env.MONGODB_URI;
app.use("/", require("./routes/Router"));

app.get("/", (req, res) => {
  res.send("connected");
});

mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((client) => {
    console.log("client connected");
  })
  .catch((error) => console.error(error));

app.listen(Port, () => {
  console.log("app is running");
});

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "baains256@gmail.com",
//     pass: "95030081dc",
//   },
// });

// const mailoption = {
//   from: "baains256@gmail.com",
//   to: "isaacchidera256@gmail.com",
//   subject: "testing and testing",
//   text: "haha in your face",
// };

// transport.sendMail(mailoption, (err, data) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("email sent!!!");
//   }
// });

///// moment.js parse
/////this could be seen as an instance of new Date
// var w = moment();
// var t = moment().get("hour");
// var m;
// m = moment.duration(t, "weeks");

// const m1 = moment("23/8/2022 11:30pm", "DD/MM/YYYY h:mmA");
// const m2 = moment();
//////// m=moment("11/1/2022 5:30pm","DD/MM/YYYY h:mmA")

/////// toString converts to local time zone
// console.log(`${w.toString()},to local time`);
// console.log(`${m},to local time`);
// console.log(`${m.humanize()} ago`);
// console.log(`${m.toString()},to local TZ`);
// console.log(`${moment.duration(m2.diff(m1)).humanize()} ago`);

////// using a format
// telling the moment what type of format
// m=moment("11/1/2022 5:30pm","DD/MM/YYYY h:mmA")

// getting is quering the current date and time

//while setting is adjusting the current date and time to ur liking

// function checkout() {
// const m1 = moment("24/8/2022 1:49pm", "DD/MM/YYYY h:mmA");
// setTimeout(() => {
//   const m2 = moment();
//   console.log(`${moment.duration(m2.diff(m1)).humanize()} ago`);
// }, 0);
//   setTimeout(() => console.log(date),0);
// }
// console.log(date)
// checkout();
// function callback(){

// }
// console.log(callback())
