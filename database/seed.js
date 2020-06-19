/* eslint-disable no-param-reassign */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
const faker = require('faker');
const db = require('./index.js');
const Reviews = require('./reviews.js');

const randomRating = () => {
  const max = 50;
  const min = 0;
  return Math.floor(Math.random() * (max - min)) / 10;
};

const randomSentences = () => {
  const max = 10;
  const min = 1;
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  let sentence = '';
  for (let i = 0; i < randomNumber; i++) {
    sentence += faker.lorem.sentence;
  }
  return sentence;
};

// const host = "Leslie";

// const randomHostComment = () => {
//   const max = 5;
//   const min = 0;
//   const didComment = Math.floor(Math.random() * (max - min) + min);
//   if (didComment > 3) {

//   }
// };

const getReviews = (numOfReviews) => {
  numOfReviews = numOfReviews || 1;
  const allReviews = [];
  for (let i = 0; i < numOfReviews; i++) {
    const review = {
      id: i,
      userName: faker.random.word(),
      profilePhoto: faker.random.image(),
      createdAt: new Date(),
      comment: randomSentences(),
      eachReview: {
        cleanliness: randomRating(),
        communication: randomRating(),
        checkIn: randomRating(),
        accuracy: randomRating(),
        location: randomRating(),
        value: randomRating(),
      },
    };
    allReviews.push(review);
  }
  return allReviews;
};

const allReviews = getReviews(100);

const insertSampleBlogs = () => {
  Reviews.create(allReviews)
    .then(() => db.disconnect());
};

insertSampleBlogs();
