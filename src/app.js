const express = require('express');
const app = express();
const port = 7000; //used for deploying the code

app.get("", (req, res)=>{
    res.send("Welcome to himanshu's weather project");
})

app.listen(port, ()=>console.log(`port ${port} is listening`));