const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter your name'],
    unique: true
  },
  rating: Number,
  price: {
    type: Number,
    required: [true, 'must have a price'],
  },
});

const jobList = mongoose.model('joblist', JobSchema);

module.exports = jobList;
