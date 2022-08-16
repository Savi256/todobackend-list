const Saveddetails = require("../model/UserModel");
// const bcrypt = require("bcrypt");

// LETS CREATE A METHOD TO SIGNUP

exports.Sign = async (req, res) => {
  // const cryptpassword = await bcrypt.hash(req.body.password, 10);
  try {
    const TMZ = new Saveddetails({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password,
      // password: cryptpassword,
    });

    await TMZ.save();
    res.send({
      message: "successfully created",
      TMZ,
    });
    return;
  } catch (error) {
    res.json(error.message);
    console.log("errorz");
  }
};

// exports.findUser=asnyc (req,res)=>{
//     try {

//     } catch (error) {

//     }
// }

// LETS CREATE A METHOD TO LOGIN

exports.findUser = async (req, res) => {
  const id = req.params.id;
  const { username, password, email } = req.body;
  try {
    const findtheuser = await Saveddetails.findById(id).lean();
    if (!findtheuser) {
      res.json("invalid user");
    } else {
      res.json({ status: 200, message: "Found" });

      const findbyusername = await Saveddetails.findOne({ email, username });
      if (!findbyusername) {
        res.send("invalid username");
      } else {
        res.send("wellcome");
      }
      if (await bcrypt.compare(password, findtheuser.password)) {
        res.json("valid assword");
      } else {
        ("invalid password");
      }
    }
  } catch (error) {
    res.json(error.message);
  }
};
