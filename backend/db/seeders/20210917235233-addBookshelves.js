'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const standardNames = ['Read', 'Currently Reading', 'Want To Read']
    const customNames = ['Favorites', 'LitRpg', 'Fantasy', 'Action', 'Comedy', 'Easy Reads', 'Longer Stories', 'New Authors', 'Best Series']
    const otherShelves = []

    for (let i = 4; i <= 20; i++){
      for (let j = 0; j < standardNames.length; j++){
        const newShelf = {
          userId: i,
          name: standardNames[j],
          deleteAllowed: false
        }
        otherShelves.push(newShelf)
      }

      const num = Math.floor(Math.random() * 2 + 1);
      let firstIdx = null;
      for (let k = 0; k < num; k++){
        let idx = Math.floor(Math.random() * customNames.length);
        while (firstIdx === idx) {
          idx = Math.floor(Math.random() * customNames.length);
        }
        const newShelf = {
          userId: i,
          name: customNames[idx],
          deleteAllowed: true
        }
        otherShelves.push(newShelf)
        firstIdx = idx;
      }
    }
    
    return queryInterface.bulkInsert('Bookshelves', [
      {
        userId: 1,
        name: 'Read',
        deleteAllowed: false
      },
      {
        userId: 1,
        name: 'Currently Reading',
        deleteAllowed: false,
      },
      {
        userId: 1,
        name: 'Want To Read',
        deleteAllowed: false,
      },
      {
        userId: 1,
        name: 'LitRpg',
        deleteAllowed: true,
      },
      {
        userId: 2,
        name: 'Read',
        deleteAllowed: false,
      },
      {
        userId: 2,
        name: 'Currently Reading',
        deleteAllowed: false,
      },
      {
        userId: 2,
        name: 'Want To Read',
        deleteAllowed: false,
      },
      {
        userId: 2,
        name: 'Favorites',
        deleteAllowed: true
      },
      {
        userId: 3,
        name: 'Read',
        deleteAllowed: false,
      },
      {
        userId: 3,
        name: 'Currently Reading',
        deleteAllowed: false,
      },
      {
        userId: 3,
        name: 'Want To Read',
        deleteAllowed: false,
      },
      ...otherShelves,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookshelves', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
