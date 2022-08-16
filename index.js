//INSTALL AND IMPORT YOUR MODULES
const express = require("express");

const nodemailer = require("nodemailer");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
const cors = require("cors");

//ASSIGN THESE MODULES TO A VARIABLE CONTAINER
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// app.use(  
//   bodyParser.urlencoded({
//     extended: true,
//   })ss
// );
dotenv.config({ path: ".env" });

const Port = process.env.PORT;
const uri = process.env.MONGODB_URI;
// app.use("/", require("./routes/Router"));

app.get("/", (req,res) => {
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
