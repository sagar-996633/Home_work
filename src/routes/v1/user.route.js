const express = require("express");
// const { userValidation } = require("../../validations");
// const { userController } = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.get(
  "/create-user",(req,res)=>{
    res.send(data);
  }
  );
let data={
  "user":"sagar s",
  "id":"12"
}
/** Get user list */
router.get(
  "/list",
  // validate(userValidation.getUserList),
  // userController.getUserList
);

module.exports = router;