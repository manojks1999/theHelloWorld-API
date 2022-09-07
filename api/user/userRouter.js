const router = require("express").Router();
const {
  createUser,
  loginUser,
  lastLogins,
  topSalaryTaker

} = require("./userController");

const {encrypt, decypt}  = require('../../auth/auth')
const {
  loginUserVal,
  createUserVal,
  salaryUserVal
} = require('../user/validate')

/*
let  enc =  (req, res, next) => {
    const body = req.body;
    console.log(body.userPassword);
    const salt = genSaltSync(10);
    const hashedValue = hashSync(body.userPassword, salt);
    console.log(hashedValue);
    const result = compareSync(hashedValue, body.userPassword)
    console.log(result)
    next();
}*/

router.post("/createUser",encrypt, createUserVal, createUser);
router.post("/loginUser", loginUserVal, loginUser);
router.get("/lastLogin", lastLogins);
router.post("/topSalary",salaryUserVal, topSalaryTaker);

module.exports = router;