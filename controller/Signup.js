const Saveddetails = require("../model/UserModel");

// LETS CREATE A METHOD TO SIGNUP

exports.Sign = async (req, res) => {
  try {
    const TMZ = new Saveddetails({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password,
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

//LETS CREATE A METHOD TO FIND /LOGIN THE CREATED USER

exports.findUser = async (req, res) => {
  const id = req.params.id;
  const { username, password, email } = req.body;
  try {
    const findTheUser = await Saveddetails.findById(id).lean();
    if (!findTheUser) {
      res.json("invalid user");
    } else {
      res.json({ status: 200, message: "Found" });

      const findByUsername = await Saveddetails.findOne({ email, username });
      if (!findByUsername) {
        res.send("invalid username");
      } else {
        res.send("wellcome");
      }
      if (await bcrypt.compare(password, findTheUser.password)) {
        res.json("valid password");
      } else {
        ("invalid password");
      }
    }
  } catch (error) {
    res.json(error.message);
  }
};

//LET CREATE A METHOD OF VERIFYING THE USER

exports.verifyUser=async(req,res)=>{
  
  try {
    
  } catch (error) {
    res.json(error.message)
  }
}