const express = require("express");

const router = express.Router();

const Tododocument = require("../controller/List");
const customerdocument = require("../controller/parent");
const Signed = require("../controller/signup");
const sentreviewsController = require("../controller/sentreviews");

router.post("/create", sentreviewsController.sender);
router.get("/getlogin",Signed.findUser)
router.post("/create-list", Tododocument.createTododocument);
router.get("/get-list", Tododocument.getTodolist);
router.get("/getSpecific-list/:id", Tododocument.getspecificlist);
router.delete("/delete-list/:id", Tododocument.deletefromlist);
router.post("/create-customerdetails", customerdocument.customerdetails);
router.post("/create-signupdetails",Signed.Sign);



module.exports = router;
