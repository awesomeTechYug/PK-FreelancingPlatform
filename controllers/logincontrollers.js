const express = require('express');

const login = (req, res)=>{
  res.send("login page");
};

const logindetails = (req, res)=>{
  console.log("loggedin page");
};


module.exports = {login, logindetails};
