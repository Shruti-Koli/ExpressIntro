const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log(req.url);
    console.log("middleware1");
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req,res,next)=>{
    console.log("middleware2");
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(5000);