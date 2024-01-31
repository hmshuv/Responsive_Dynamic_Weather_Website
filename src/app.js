const express = require('express');
const app = express();

app.get("", (req, res)=>{
    res.send("Welcome to himanshu's weather project");
})

app.listen(7000, ()=>"port 7000 is listening");