const router = require("express").Router();
const {
  createUser,
  loginUser,
  lastLogins,
  topSalaryTaker

} = require("./userController");

const {encrypt, decypt}  = require('../../auth/auth')


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
router.post("/createUser",encrypt, createUser);
router.post("/loginUser", loginUser);
router.get("/lastLogin", lastLogins);
router.post("/topSalary", topSalaryTaker);

module.exports = router;