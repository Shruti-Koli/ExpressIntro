const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
const loginRoute = require("./routes/login");
const msgRoute = require("./routes/message");

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);
app.use(msgRoute);


app.listen(3000);