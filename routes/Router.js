const express = require("express");
const { protect } = require("../Middleware/auth");

const router = express.Router();

const Tododocument = require("../controller/List");
const Signed = require("../controller/Signup");
const sentreviewsController = require("../controller/sentreviews");

router.post("/create-signupdetails", Signed.Sign);
router.post("/verifyUser/:id", Signed.verifyUser);
router.post("/getlogin", Signed.findUser);
router.post("/create-list", Tododocument.createTododocument);
router.put("/update/:id",protect, Tododocument.updatelist);
router.get("/get-list",protect, Tododocument.getTodolist);
router.get("/getSpecific-list/:id",protect, Tododocument.getspecificlist);
router.delete("/delete-list/:id",protect, Tododocument.deletefromlist);
router.post("/create", sentreviewsController.sender);

module.exports = router;
