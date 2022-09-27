const express = require("express");

const router = express.Router();

const Tododocument = require("../controller/List");
const Signed = require("../controller/Signup");
const sentreviewsController = require("../controller/sentreviews");

router.post("/create-signupdetails", Signed.Sign);
router.post("/verifyUser/:id", Signed.verifyUser);
router.get("/getlogin", Signed.findUser);
router.post("/create-list", Tododocument.createTododocument);
router.put("/update/:id", Tododocument.updatelist);
router.get("/get-list", Tododocument.getTodolist);
router.get("/getSpecific-list/:id", Tododocument.getspecificlist);
router.delete("/delete-list/:id", Tododocument.deletefromlist);
router.post("/create", sentreviewsController.sender);

module.exports = router;
