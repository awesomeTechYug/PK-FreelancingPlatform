const express = require('express');
const fs= require('fs');
const bodyParser= require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) =>{
  res.status(200).send("homepage");
});


var login = require("./routes/loginRoutes")
 app.use("/login", login);

var jobList=  require("./routes/joblistingRoutes")
app.use("/jobs", jobList);



module.exports = app;
