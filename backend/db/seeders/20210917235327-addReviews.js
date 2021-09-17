'use strict';
const reviews = require('../../reviews');
const { Story, User, Bookshelf } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const values = [];

    // const lastStory = await Story.findAll({
    //   order: [['id', 'DESC']],
    //   limit: 1
    // })

    // const lastId = lastStory[0].id;

    const usersRaw = await User.findAll({
      include: {
        model: Bookshelf,
        include: Story
      }
    })

    const usersAndStories = usersRaw.map(user => {
      const storyIds = []

      for (let i = 0; i < user.Bookshelves.length; i++){
        const shelf = user.Bookshelves[i];
        if (shelf.deleteAllowed) continue;
        storyIds.push(...shelf.Stories.map(story => story.id))
      }
      return {
        id: user.id,
        storyIds
      }
    })

    for (let j = 0; j < usersAndStories.length; j++){
      const user = usersAndStories[j];
      const usedIdxs = []
      for (let k = 0; k < user.storyIds.length / 2; k++) {
        // Randomly picking a rating for the recommendation
        const rating = Math.floor(Math.random() * 5) + 1;

        // Building the review
        // Initializing an empty array to hold the different parts of the new review
        let review = [];
        // Iterating through the values of the object that is the value tied to the key of the rating that I just generated. Each of these values will be an array of possible review parts (in this case I only have two parts that I will combine)
        Object.values(reviews[rating]).forEach((value) => {
          // Saving the length of the array to a variable for easier readability
          const arrLength = value.length;
          // Choosing a random index in the current array
          const index = Math.floor(Math.random() * arrLength);
          // Adding the review part at the random index to the review I've built so far
          review.push(value[index]);
        });
        // Joining the different parts (2) of the review array on a space.
        review = review.join(' ');

        // Grabbing a random storyId from the ones that are available
        let idx = Math.floor(Math.random() * user.storyIds.length)
        // Making sure this user hasn't reviewed this story yet
        while (usedIdxs.includes(idx))
          idx = Math.floor(Math.random() * user.storyIds.length);

        // Adding the id of the story so we can check against it later on when randomly grabbing a story id
        usedIdxs.push(idx);

        // Adding this new review to the results I have collected
        values.push({
          // completely random rating
          rating,
          // Grabbing the review with the index we generated a few lines ago
          content: review,
          userId: user.id,
          storyId: user.storyIds[idx],
        });
      }
    }

    // function makeRecommendations(
    //   numRecommendations,
    //   usersEnd,
    //   numStories,
    //   reviews,
    //   usersStart,
    //   storiesStart
    // ) {
    //   // Initializing and empty array to hold them
    //   const result = [];
    //   // Looping through all the users except the first one to add reviews for them
    //   for (let k = usersStart; k < usersEnd; k++) {
    //     // Keeping track of which stories this user has reviewed
    //     let stories = [];
    //     for (let i = 0; i < numRecommendations; i++) {
    //       // Randomly picking a rating for the recommendation
    //       const rating = Math.floor(Math.random() * 5) + 1;

    //       // Building the review
    //       // Initializing an empty array to hold the different parts of the new review
    //       let review = [];
    //       // Iterating through the values of the object that is the value tied to the key of the rating that I just generated. Each of these values will be an array of possible review parts (in this case I only have two parts that I will combine)
    //       Object.values(reviews[rating]).forEach((value) => {
    //         // Saving the length of the array to a variable for easier readability
    //         const arrLength = value.length;
    //         // Choosing a random index in the current array
    //         const index = Math.floor(Math.random() * arrLength);
    //         // Adding the review part at the random index to the review I've built so far
    //         review.push(value[index]);
    //       });
    //       // Joining the different parts (2) of the review array on a space.
    //       review = review.join(' ');

    //       // Grabbing a random storyId from the ones that are available
    //       let storyId = Math.floor(Math.random() * numStories) + storiesStart;
    //       // Making sure this user hasn't reviewed this story yet
    //       while (stories.includes(storyId))
    //         storyId = Math.floor(Math.random() * numStories) + storiesStart;

    //       // Adding the id of the story so we can check against it later on when randomly grabbing a story id
    //       stories.push(storyId);

    //       // Adding this new review to the results I have collected
    //       result.push({
    //         // completely random rating
    //         rating,
    //         // Grabbing the review with the index we generated a few lines ago
    //         content: review,
    //         userId: k,
    //         storyId,
    //       });
    //     }
    //   }
    //   return result;
    // }

    // const numRecs = 5;
    // const usersEnd = 21;
    // const numStories = lastId;
    // const usersStart = 1;
    // const storiesStart = 1;

    // let recArray = makeRecommendations(
    //   numRecs,
    //   usersEnd,
    //   numStories,
    //   reviews,
    //   usersStart,
    //   storiesStart
    // );
    // values.push(...recArray);

    return queryInterface.bulkInsert('Reviews', values, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true});
  }
};
