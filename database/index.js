const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/appbnb/reviews';

const db = mongoose.connect(mongoUri);

module.exports = db;
