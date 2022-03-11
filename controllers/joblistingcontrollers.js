const express = require('express');
const fs= require('fs');
const Tour = require('./../models/jobModels');

const jobsdata = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/dummydata.json`))
const getjobsdata = (req, res) =>{
  res.status(200).json({
    status: "success",
    result: jobsdata.length,
    data: {
      jobsdata
    }
  })
};


const createJob = (req,res) => {
  console.log(req.body);
  res.send('Done');
};

module.exports = {getjobsdata, createJob};
