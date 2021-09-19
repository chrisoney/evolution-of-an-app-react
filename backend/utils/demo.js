const { Story, Placement, sequelize } = require('../db/models');


const addStories = async (shelves) => {
  const stories = await Story.findAll({
    order: sequelize.random(),
    limit: 6
  })
  const faveStories = stories.filter(story => story.id % 2 === 1)
  const otherShelf = shelves.pop();

  const distribution = [1,3,2]
  for (let i = 0; i < shelves.length; i++){
    let shelf = shelves[i];
    let numStories = distribution[i];
    while (numStories > 0) {
      const story = stories.shift();
      await Placement.create({ bookshelfId: shelf.id, storyId: story.id })
      numStories--;
    }
  }
  for (let j = 0; j < faveStories.length; j++){
    let story = faveStories[j];
    await Placement.create({ bookshelfId: otherShelf.id, storyId: story.id })
  }
}

const alterFeed = async () => {
  const random = await Placement.findAll({
    order: sequelize.random(),
    limit: 10,
  })
  for (let i = 0; i < random.length; i++){
    const placement = random[i]
    placement.changed('updatedAt', true)
    await placement.save();
  }
}

module.exports = {
  addStories,
  alterFeed
};