const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 7000;   //Uused for deploying the code

//public static path

const static_path = path.join((__dirname), "../public/");

app.use(express.static(static_path));

//routing
app.get("/", (req, res)=>{
    res.send("Welcome to himanshu's weather project");
})
app.get("/about", (req, res)=>{
    res.send("Welcome to Himanshu's Weather project About Page");
})
app.get("/weather", (req, res)=>{
    res.send("welcome to weather page!");
})
app.get("*", (req, res)=>{
    res.send("404!!!! OOPs page not found :(");
})

app.listen(port, ()=> console.log(`port ${port} is listening`));
