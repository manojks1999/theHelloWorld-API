const bcrypt = require('bcrypt');

let encrypt = async(req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.userPassword,10);
    req.body.userPassword = hashedPassword;
    next();
}


module.exports = {
    encrypt
  };