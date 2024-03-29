const Saveddetails = require("../model/UserModel");
const verification = require("../model/verification");
const { randomInt, randomBytes } = require("crypto");
const { verifyemail } = require("../email/service");
const { isValidObjectId } = require("mongoose");
const generateToken = require("../config/Generatetoken");
// LETS CREATE A METHOD TO SIGNUP
const OTP = randomInt(10000, 90000);

exports.Sign = async (req, res) => {
  try {
    const TMZ = new Saveddetails({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    const verify = new verification({
      owner: TMZ._id,
      token: OTP,
    });
    await verify.save(verify);
    await TMZ.save();
    await verifyemail(TMZ.email, OTP);

    res.send({
      message: "An email has been sent to you please verify",
      id : TMZ._id,
      TMZ: TMZ,
      token: generateToken(TMZ._id),
    });
    console.log(TMZ._id);
    return;
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
};

//LETS CREATE A METHOD TO FIND /LOGIN THE CREATED USER

exports.find = async (req, res) => {
  const id = req.params.id;
  try {
    const findTheUser = await Saveddetails.findById(id).lean();
    if (!findTheUser) {
      res.json("invalid user");
    } else {
      res.json({ status: 200, message: findTheUser });
    }
    return;
  } catch (error) {
    res.json(error.message);
  }
};
exports.findUser = async (req, res) => {
  const id = req.params.id;
  const { password, email } = req.body;
  try {
    // const findTheUser = await Saveddetails.findById(id).lean();
    // if (!findTheUser) {
    //   res.json("invalid user");
    // } else {
    //   res.json({ status: 200, message: "Found" });
    // }
    const findByUsername = await Saveddetails.findOne({ email });
    if (!findByUsername) {
      res.send("invalid username");
      return;
    }
    const comparePassword = await findByUsername.comparepassword(password);
    if (!comparePassword) {
      res.json("invalid password");
    } else {
      res.json({
        message: findByUsername,
        token: generateToken(findByUsername._id),
      });
    }
    return;
  } catch (error) {
    res.json(error.message);
  }
};

//LET CREATE A METHOD OF VERIFYING THE USER

exports.verifyUser = async (req, res) => {
  const otp = req.body.otp;
  const userId = req.params.id;
  try {
    if (!userId || !otp) {
      res.json("invalid request");
      return;
    }
    if (!isValidObjectId(userId)) {
      res.json("invalid id");
      return;
    }
    const verifiedUserModel = await Saveddetails.findById(userId).lean();
    if (!verifiedUserModel) {
      res.json("user not found");
    }
    if (verifiedUserModel.verified) {
      return res.json({
        status: 500,
        message: "USER FOUND",
      });
    }
    const verifiedUsers = await verification.findOne({
      owner: verifiedUserModel._id,
      // token: otp,
    });
    if (!verifiedUsers) {
      res.json("user not found");
    }
    const matched = await verifiedUsers.compareToken(otp);
    if (!matched) {
      return res.json({
        status: 500,
        message: "...countdown...destruction imminent",
      });
    }
    await Saveddetails.updateOne({ verified: true });

    await verification.findByIdAndDelete(verifiedUsers._id);
    res.json("successful verification");
    // res.redirect("https://tapp-todo-list.herokuapp.com");
  } catch (error) {
    res.json(error.message);
    return;
  }
};
