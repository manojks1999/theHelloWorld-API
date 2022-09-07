const pool = require("../../config/database");

const {encrypt}  = require('../../auth/auth')

const bcrypt = require('bcrypt')


let create = (req) => {
    return new Promise((resolve, reject) => {
        const salary = req.salary;
        let tax=0;
        if(salary<500000){
            tax = salary*0.10;
        }else if(salary >50000 && salary < 1000000){
            tax = salary*0.20;
        }else{
            tax = salary*0.30;
        }
        console.log(req)
        pool.query(
            `INSERT INTO users (userId, name, salary, tax, email, password)
                      values(?,?,?,?,?,?)`,
            [
              req.userId, req.name, salary, tax, req.email, req.userPassword
            ],
            (error, results) => {
              if (error) {
                  console.log(error)
                return reject(error)
              }
              
              console.log(results)
              return resolve(results)
            }
          );
    })
}

let login = (req) => {
    return new Promise((resolve, reject) => {
        console.log(req)
        pool.query(
            `SELECT userId, password, name, email, salary, tax FROM users WHERE userId = ?`,
            [
              req.userId
            ],
            (error, results, fields) => {
              if (error) {
                  console.log(error)
                return reject(error)
              }
              if(results.length === 0){
                console.log(error)
                return reject(error)
              }
              console.log("RES",req.userPassword, results[0].password)
              let flag = bcrypt.compareSync(req.userPassword, results[0].password);
              if(!flag){
                  return reject(error)
              }
              delete results[0].password;
              return resolve(results)
            }
          );
    })
}
let addLog = (req) => {
    return new Promise((resolve, reject) => {
        console.log(req)
        pool.query(
            `INSERT INTO logs (time, userId)
                      values(?,?)`,
            [
                Date.now(), req.userId
            ],
            (error, results, fields) => {
              if (error) {
                  console.log(error)
                return reject(error)
              }
              console.log(results)
              return resolve(results)
            }
          );
    })
}

let lastLogin = () => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT DISTINCT userId from logs ORDER BY time DESC LIMIT 10`,
            (error, results, fields) => {
              if (error) {
                  console.log(error)
                return reject(error)
              }
              console.log(results)
              return resolve(results)
            }
          );
    })
}


let topSalary = (req) => {
    return new Promise((resolve, reject) => {
        if(req.order === 'ASC'){
            pool.query(
                `SELECT userId, name, email, salary, tax FROM users ORDER BY salary ASC LIMIT 3`,
                (error, results, fields) => {
                  if (error) {
                      console.log(error)
                    return reject(error)
                  }
                  console.log(results)
                  return resolve(results)
                }
              );
        }else if(req.order === 'DESC'){
            pool.query(
                `SELECT userId, name, email, salary, tax FROM users ORDER BY salary DESC LIMIT 3`,
                (error, results, fields) => {
                  if (error) {
                      console.log(error)
                    return reject(error)
                  }
                  console.log(results)
                  return resolve(results)
                }
              );
        }else{
            return reject("ERROR")
        }
        
    })
}

let decrypt = (req) => {
    let res = async() => {
        console.log("dec",req)
        try {
            if (await bcrypt.compare(req.userPassword, req.hashedPassword)) {
                console.log(req.hashedPassword)
                return true;
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    }
    console.log(res);
}
module.exports = {
  create,
  login,
  addLog,
  lastLogin,
  topSalary
};