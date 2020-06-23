/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  id: Number,
  username: String,
  profilePhoto: String,
  createdAt: Date,
  comment: String,
  review: {
    cleanliness: Number,
    communication: Number,
    checkIn: Number,
    accuracy: Number,
    location: Number,
    value: Number,
  },
  // hostComment: String,
  // hostCreatedAt: Date,
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
