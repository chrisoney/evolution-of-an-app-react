'use strict';
const { Story, Bookshelf, sequelize } = require('../models');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    
    const shuffle = (arr) => {
      let array = [...arr];
      const result = [];
      while (array.length > 0) {
        const idx = Math.floor(Math.random() * array.length);
        result.push(array[idx]);
        array = [...array.slice(0, idx), ...array.slice(idx + 1)];
      }
      return result;
    }
    
    const addStories = async (standardShelves, customShelf = []) => {
      const result = []
      const stories = await Story.findAll({
        order: sequelize.random(),
        limit: 12
      })
    
      const faveStories = stories.filter(story => story.id % 2 === 1)
      const faveStoriesTwo = stories.filter(story => story.id % 2 === 0)
    
      const distribution = shuffle([4, 3, 5]);
      
      for (let i = 0; i < standardShelves.length; i++){
        let shelf = standardShelves[i];
        let numStories = distribution[i];
        while (numStories > 0) {
          const story = stories.shift();
          result.push({ bookshelfId: shelf, storyId: story.id })
          numStories -= 1;
        }
      }
      if (customShelf[0]) {        
        for (let j = 0; j < faveStories.length; j++){
          let story = faveStories[j];
          result.push({ bookshelfId: customShelf[0], storyId: story.id })
        }
      }
      if (customShelf[1]) {
        for (let k = 0; k < faveStoriesTwo.length; k++){
          let story = faveStoriesTwo[k];
          result.push({ bookshelfId: customShelf[1], storyId: story.id })
        }
      }
      return result;
    }

    const values = [];
    // User 1
    for (let i = 1; i <= 20; i++){
      const bookshelves = await Bookshelf.findAll({ where: { userId: i } });
      const standard = bookshelves.filter(shelf => shelf.deleteAllowed === false).map(shelf => shelf.id)
      const custom = bookshelves.filter(shelf => shelf.deleteAllowed === true).map(shelf => shelf.id)
      const result = await addStories(standard, custom)
      values.push(...result)
    }
    // const res1 = await addStories([1, 2, 3], 4);
    // const res2 = await addStories([5, 6, 7], 8);
    // const res3 = await addStories([9, 10, 11]);
    // values.push(...res1, ...res2, ...res3)
    
    return queryInterface.bulkInsert('Placements', values, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Placements', null, { truncate: true,cascade: true, restartIdentity: true });
  }
};
