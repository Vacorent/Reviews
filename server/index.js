/* eslint-disable no-console */
const express = require('express');
// const Reviews = require('../database/reviews.js');

const app = express();
const PORT = 3000;

app.use(express.static('./client/dist'));

// app.get();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
