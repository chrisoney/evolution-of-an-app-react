'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    let values = ["Adventure", "Fantasy", "Mystery", "Magic", "Comedy", "Romance", "Male Lead", "Martial Arts", "Portal Fantasy / Isekai", "Reincarnation", "Xianxia", "Action", "Sci-fi", "Non-Human lead", "Secret Identity", "Super Heroes", "Villainous Lead", "Anti-Hero Lead", "Genetically Engineered ", "Loop", "Strong Lead", "Time Travel", "Female Lead", "LitRPG", "Historical", "Urban Fantasy", "Tragedy", "Attractive MC", "Low Fantasy", "Multiple Lead Characters", "Mythos", "Progression", "Slice of Life", "Supernatural", "War and Military", "Wuxia", "Satire", "Contemporary", "Drama", "School Life", "High Fantasy", "Artificial Intelligence", "GameLit", "Soft Sci-fi", "Virtual Reality", "Gender Bender", "Ruling Class", "Strategy", "Psychological", "Grimdark", "Horror", "Cyberpunk", "Dystopia", "Post Apocalyptic", "Dungeon", "Steampunk", "Technologically Engineered", "First Contact", "Space Opera", "Short Story", "Reader interactive"];
    
    values = values.map(val => {
      return { name: val }
    });
    return queryInterface.bulkInsert('Tags', values, {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Tags', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
