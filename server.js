const express = require("express");
const app = express();
const userRouter = require("./api/user/userRouter");

const pool = require('./config/database');
app.use(express.json());


pool.query(`describe users`,
(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});

// msgId = Date.now();
// console.log(msgId)


app.use("/api", userRouter);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});




