const express = require('express');
const app = express();
const port = process.env.PORT || 7000; //used for deploying the code

app.get("", (req, res)=>{
    res.send("Welcome to himanshu's weather project");
})
app.get("/about", (req, res)=>{
    res.send("Welcome to himanshu's weather project About Page");
})
app.get("/weather", (req, res)=>{
    res.send("Welcome to himanshu's weather project weather Page");
})
app.get("*", (req, res)=>{
    res.send("404 OOPs page not found :(");
})

app.listen(port, ()=>console.log(`port ${port} is listening`));