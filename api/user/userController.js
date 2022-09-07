const {
    create,
    login,
    addLog,
    lastLogin,
    topSalary
  } = require("./userService");
  
const {encrypt, decypt}  = require('../../auth/auth')


let createUser = async (req, res) => {
    const body = req.body;
    let result;
    try{
        result = await create(body, res);
        console.log(result)
    }catch{
        console.log(result)
    return res.status(404).json({
        status:0,
        "message": "Failed",
    })
    }
    return res.status(200).json({
    status:1,
    "message": "Created"
    });
}

let loginUser = async (req, res) => {
    const body = req.body;
    let result;
    try{
        result = await login(body);
    }catch{
        return res.status(404).json({
            status:0,
            "message": "Failed",
        })
    }
    try{
        resultLog = await addLog(body);
    }catch{
        return res.status(404).json({
            status:0,
            "message": "Failed",
        })
    }
    return res.json({
        success: 1,
        data: result
    });
}


let lastLogins = async (req, res) => {
    let resultLog;
    try{
        resultLog = await lastLogin();
    }catch{
        return res.status(404).json({
            status:0,
            "message": "Failed",
        })
    }
    return res.json({
        success: 1,
        data: resultLog
    });
}



let topSalaryTaker = async (req, res) => {
    const body = req.body;
    let results;
    try{
        results = await topSalary(body);
    }catch{
        return res.status(404).json({
            status:0,
            "message": "Failed",
        })
    }
    return res.json({
        success: 1,
        data: results
    });
}
module.exports = {
  createUser,
  loginUser,
  lastLogins,
  topSalaryTaker
}