'use strict';

const { Story, Tag } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const values = []
    const data = [
      {
        title: "Mother of Learning",
        tags: [
          "Adventure",
          "Fantasy",
          "Mystery",
          "Magic"
        ]
      },
      {
        title: "Beware Of Chicken",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Romance",
          "Male Lead",
          "Martial Arts",
          "Portal Fantasy / Isekai",
          "Reincarnation",
          "Xianxia"
        ]
      },
      {
        title: "Super Minion",
        tags: [
          "Action",
          "Sci-fi",
          "Non-Human lead",
          "Secret Identity",
          "Super Heroes",
          "Villainous Lead"
        ]
      },
      {
        title: "The Perfect Run",
        tags: [
          "Adventure",
          "Comedy",
          "Mystery",
          "Sci-fi",
          "Anti-Hero Lead",
          "Genetically Engineered ",
          "Loop",
          "Male Lead",
          "Strong Lead",
          "Super Heroes",
          "Time Travel"
        ]
      },
      {
        title: "The Calamitous Bob",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "LitRPG",
          "Magic"
        ]
      },
      {
        title: "A Journey of Black and Red",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Historical",
          "Female Lead",
          "Urban Fantasy",
          "Villainous Lead"
        ]
      },
      {
        title: "Virtuous Sons: A Greco Roman Xianxia",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Tragedy",
          "Attractive MC",
          "Low Fantasy",
          "Magic",
          "Male Lead",
          "Martial Arts",
          "Multiple Lead Characters",
          "Mythos",
          "Progression",
          "Secret Identity",
          "Slice of Life",
          "Strong Lead",
          "Supernatural",
          "War and Military",
          "Wuxia",
          "Xianxia"
        ]
      },
      {
        title: "Vainqueur the Dragon",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Satire",
          "Anti-Hero Lead",
          "LitRPG",
          "Multiple Lead Characters",
          "Non-Human lead",
          "Strong Lead"
        ]
      },
      {
        title: "RE: Trailer Trash",
        tags: [
          "Adventure",
          "Contemporary",
          "Drama",
          "Historical",
          "Female Lead",
          "School Life",
          "Slice of Life",
          "Supernatural"
        ]
      },
      {
        title: "Borne of Caution ",
        tags: [
          "Adventure",
          "Drama",
          "Fantasy",
          "Male Lead",
          "Multiple Lead Characters",
          "Non-Human lead",
          "Portal Fantasy / Isekai",
          "Supernatural",
          "Urban Fantasy"
        ]
      },
      {
        title: "The Essence of Cultivation",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Martial Arts",
          "Portal Fantasy / Isekai",
          "Strong Lead",
          "Wuxia"
        ]
      },
      {
        title: "Prophecy Approved Companion",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Satire",
          "Artificial Intelligence",
          "Female Lead",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Non-Human lead",
          "Soft Sci-fi",
          "Virtual Reality"
        ]
      },
      {
        title: "There is no Epic Loot here, Only Puns.",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Female Lead",
          "LitRPG",
          "Magic"
        ]
      },
      {
        title: "The Power of Ten, Book Three : The Human Race",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "GameLit",
          "Gender Bender",
          "LitRPG",
          "Magic",
          "Mythos",
          "Strong Lead",
          "Urban Fantasy",
          "War and Military"
        ]
      },
      {
        title: "Kairos: A Greek Myth LitRPG",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Anti-Hero Lead",
          "High Fantasy",
          "LitRPG",
          "Male Lead",
          "Mythos",
          "Progression",
          "Ruling Class",
          "Strategy"
        ]
      },
      {
        title: "Lost In Translation",
        tags: [
          "Adventure",
          "Drama",
          "Fantasy",
          "Romance",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Mythos",
          "Progression",
          "Secret Identity",
          "Slice of Life",
          "Supernatural",
          "Time Travel"
        ]
      },
      {
        title: "RE: Monarch",
        tags: [
          "Adventure",
          "Fantasy",
          "Mystery",
          "Psychological",
          "Grimdark",
          "High Fantasy",
          "Loop",
          "Magic",
          "Male Lead",
          "Martial Arts",
          "Progression",
          "Reincarnation",
          "Strategy",
          "Time Travel"
        ]
      },
      {
        title: "Vigor Mortis",
        tags: [
          "Adventure",
          "Fantasy",
          "Horror",
          "Female Lead",
          "High Fantasy",
          "Magic",
          "Progression"
        ]
      },
      {
        title: "Azarinth Healer",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "LitRPG",
          "Magic"
        ]
      },
      {
        title: "The Many Lives of Cadence Lee",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Romance",
          "Female Lead",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Progression",
          "Reincarnation",
          "Slice of Life",
          "Strategy"
        ]
      },
      {
        title: "Romantically Apocalyptic",
        tags: [
          "Adventure",
          "Comedy",
          "Horror",
          "Sci-fi",
          "Anti-Hero Lead",
          "Artificial Intelligence",
          "Cyberpunk",
          "Dystopia",
          "Female Lead",
          "Male Lead",
          "Multiple Lead Characters",
          "Post Apocalyptic",
          "Strong Lead",
          "Super Heroes",
          "Supernatural",
          "Time Travel",
          "War and Military"
        ]
      },
      {
        title: "The Stars Have Eyes",
        tags: [
          "Comedy",
          "Horror",
          "Romance",
          "Sci-fi",
          "Female Lead",
          "Non-Human lead",
          "Slice of Life",
          "Strong Lead",
          "Virtual Reality"
        ]
      },
      {
        title: "Castle Kingside (Rewrite)",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Mystery",
          "Grimdark",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters",
          "Portal Fantasy / Isekai",
          "Reincarnation",
          "Ruling Class"
        ]
      },
      {
        title: "The Calamity of a Reborn Witch",
        tags: [
          "Drama",
          "Fantasy",
          "Psychological",
          "Tragedy",
          "Female Lead",
          "Grimdark",
          "High Fantasy",
          "Magic",
          "Multiple Lead Characters",
          "Portal Fantasy / Isekai",
          "Reincarnation",
          "Ruling Class",
          "Secret Identity",
          "Strategy",
          "Strong Lead"
        ]
      },
      {
        title: "Shade Touched",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "High Fantasy",
          "Magic",
          "Non-Human lead",
          "Slice of Life"
        ]
      },
      {
        title: "Never Die Twice",
        tags: [
          "Fantasy",
          "Dungeon",
          "LitRPG",
          "Male Lead",
          "Mythos",
          "Secret Identity",
          "Strong Lead",
          "Villainous Lead"
        ]
      },
      {
        title: "Seaborn",
        tags: [
          "Adventure",
          "Fantasy",
          "GameLit",
          "LitRPG",
          "Magic"
        ]
      },
      {
        title: "Dungeon Crawler Carl Book 5: The Hunting Grounds",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Dungeon",
          "GameLit",
          "Grimdark",
          "LitRPG",
          "Low Fantasy",
          "Magic",
          "Male Lead",
          "Non-Human lead",
          "Post Apocalyptic",
          "Strategy",
          "Strong Lead",
          "Supernatural"
        ]
      },
      {
        title: "The Iron Teeth:  A Goblin's Tale",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Anti-Hero Lead",
          "Grimdark",
          "Magic",
          "Male Lead",
          "Non-Human lead"
        ]
      },
      {
        title: "Tower of Somnus",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Sci-fi",
          "Cyberpunk",
          "Female Lead",
          "GameLit",
          "LitRPG",
          "Magic",
          "Urban Fantasy"
        ]
      },
      {
        title: "Stray Cat Strut - A Young Lady's Journey to Becoming a Pop-Up Samurai",
        tags: [
          "Action",
          "Sci-fi",
          "Artificial Intelligence",
          "Cyberpunk",
          "Female Lead",
          "GameLit",
          "LitRPG",
          "Soft Sci-fi"
        ]
      },
      {
        title: "Epilogue",
        tags: [
          "Contemporary",
          "Drama",
          "Fantasy",
          "Psychological",
          "Female Lead",
          "High Fantasy",
          "Low Fantasy",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters",
          "Portal Fantasy / Isekai",
          "School Life",
          "Secret Identity",
          "Supernatural"
        ]
      },
      {
        title: "12 Miles Below",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Sci-fi",
          "Artificial Intelligence",
          "Dungeon",
          "Dystopia",
          "GameLit",
          "Grimdark",
          "Magic",
          "Male Lead",
          "Post Apocalyptic",
          "Progression",
          "Strong Lead",
          "Supernatural"
        ]
      },
      {
        title: "Cinnamon Bun",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Female Lead",
          "LitRPG",
          "Magic",
          "Portal Fantasy / Isekai"
        ]
      },
      {
        title: "Threadbare",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "LitRPG",
          "Magic",
          "Non-Human lead"
        ]
      },
      {
        title: "ARMOR",
        tags: [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "Dungeon",
          "GameLit",
          "High Fantasy",
          "Magic",
          "Non-Human lead",
          "Secret Identity",
          "Strong Lead"
        ]
      },
      {
        title: "Path of the Dragon Mage",
        tags: [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Male Lead",
          "Progression",
          "Secret Identity"
        ]
      },
      {
        title: "The Devil's Foundry",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Anti-Hero Lead",
          "Female Lead",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Portal Fantasy / Isekai",
          "Strong Lead",
          "Super Heroes",
          "Villainous Lead"
        ]
      },
      {
        title: "The Hedge Wizard",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Dungeon",
          "GameLit",
          "Grimdark",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Progression"
        ]
      },
      {
        title: "I Became a [Biologist] in a Fantasy World!",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Portal Fantasy / Isekai",
          "Progression",
          "Strategy"
        ]
      },
      {
        title: "The Eagle's Flight",
        tags: [
          "Adventure",
          "Drama",
          "Fantasy",
          "Historical",
          "High Fantasy",
          "Multiple Lead Characters",
          "Ruling Class",
          "Strategy",
          "Supernatural",
          "War and Military"
        ]
      },
      {
        title: "Wildcards: Book Two - The Dread Captain",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Sci-fi",
          "Anti-Hero Lead",
          "Cyberpunk",
          "GameLit",
          "LitRPG",
          "Male Lead",
          "Multiple Lead Characters",
          "Strategy",
          "Virtual Reality"
        ]
      },
      {
        title: "A Lonely Dungeon",
        tags: [
          "Adventure",
          "Fantasy",
          "Mystery",
          "Dungeon",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Non-Human lead",
          "Post Apocalyptic"
        ]
      },
      {
        title: "The Great Core's Paradox",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "GameLit",
          "LitRPG",
          "Loop",
          "Magic",
          "Non-Human lead",
          "Progression"
        ]
      },
      {
        title: "The House Witch",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Romance",
          "High Fantasy",
          "Magic",
          "Male Lead"
        ]
      },
      {
        title: "Lament of the Fallen",
        tags: [
          "Action",
          "Drama",
          "Fantasy",
          "Romance",
          "Female Lead",
          "Magic",
          "Non-Human lead",
          "Strong Lead"
        ]
      },
      {
        title: "Post Human",
        tags: [
          "Action",
          "Drama",
          "Psychological",
          "Sci-fi",
          "Grimdark",
          "Non-Human lead"
        ]
      },
      {
        title: "A Journey in Darkness",
        tags: [
          "Adventure",
          "Fantasy",
          "Female Lead",
          "Genetically Engineered ",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Portal Fantasy / Isekai",
          "Progression"
        ]
      },
      {
        title: "Rebirth in a Magical World",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Magic",
          "Male Lead",
          "Reincarnation",
          "School Life"
        ]
      },
      {
        title: "Desolada",
        tags: [
          "Action",
          "Fantasy",
          "Anti-Hero Lead",
          "Grimdark",
          "Loop",
          "Magic",
          "Progression",
          "Time Travel"
        ]
      },
      {
        title: "Lever Action",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "Post Apocalyptic",
          "Progression",
          "Steampunk",
          "Technologically Engineered"
        ]
      },
      {
        title: "Forge of Destiny",
        tags: [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "Female Lead",
          "Magic",
          "Martial Arts",
          "Slice of Life",
          "Xianxia"
        ]
      },
      {
        title: "Valkyrie's Shadow",
        tags: [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "Anti-Hero Lead",
          "Female Lead",
          "First Contact",
          "GameLit",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters",
          "Non-Human lead",
          "Portal Fantasy / Isekai",
          "Progression",
          "Ruling Class",
          "Slice of Life",
          "Strategy",
          "Strong Lead",
          "Supernatural"
        ]
      },
      {
        title: "Somebody Stop Her",
        tags: [
          "Action",
          "Comedy",
          "Sci-fi",
          "Anti-Hero Lead",
          "Female Lead",
          "Male Lead",
          "Post Apocalyptic",
          "School Life",
          "Super Heroes",
          "Time Travel",
          "Villainous Lead"
        ]
      },
      {
        title: "Arrogant Young Master Template A Variation 4",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "LitRPG",
          "Male Lead",
          "Martial Arts",
          "Ruling Class",
          "Slice of Life",
          "Xianxia"
        ]
      },
      {
        title: "Misadventures of a Rampaging Demon",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Anti-Hero Lead",
          "Female Lead",
          "High Fantasy",
          "Magic",
          "Multiple Lead Characters",
          "Non-Human lead",
          "Strong Lead"
        ]
      },
      {
        title: "This Used to be About Dungeons",
        tags: [
          "Adventure",
          "Fantasy",
          "Dungeon",
          "High Fantasy",
          "Magic",
          "Multiple Lead Characters",
          "Slice of Life"
        ]
      },
      {
        title: "Undead",
        tags: [
          "Action",
          "Horror",
          "Grimdark",
          "LitRPG",
          "Magic",
          "Non-Human lead",
          "Reincarnation",
          "Villainous Lead"
        ]
      },
      {
        title: "Pith",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Psychological",
          "Gender Bender",
          "High Fantasy",
          "Magic",
          "Multiple Lead Characters",
          "Strategy"
        ]
      },
      {
        title: "A Sinner's Eden",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Romance",
          "Anti-Hero Lead",
          "Female Lead",
          "Genetically Engineered ",
          "Grimdark",
          "Male Lead",
          "Multiple Lead Characters",
          "Villainous Lead"
        ]
      },
      {
        title: "Salvos (A Monster Evolution LitRPG)",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Non-Human lead",
          "Portal Fantasy / Isekai",
          "Progression",
          "Strong Lead"
        ]
      },
      {
        title: "First Contact",
        tags: [
          "Action",
          "Adventure",
          "Sci-fi",
          "Anti-Hero Lead",
          "Cyberpunk",
          "Female Lead",
          "First Contact",
          "Male Lead",
          "Multiple Lead Characters",
          "Mythos",
          "Non-Human lead",
          "Soft Sci-fi",
          "Space Opera",
          "War and Military"
        ]
      },
      {
        title: "The Ogre's Pendant & The Rat in the Pit (Completed)",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters",
          "Strong Lead"
        ]
      },
      {
        title: "A Dream of Wings and Flame",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Attractive MC",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Non-Human lead",
          "Progression"
        ]
      },
      {
        title: "A Beginner's Guide to Napping, Sunbathing, and Slaughtering Your Prey",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Anti-Hero Lead",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Non-Human lead",
          "Portal Fantasy / Isekai",
          "Slice of Life",
          "Strong Lead"
        ]
      },
      {
        title: "Lonely Light (Complete)",
        tags: [
          "Fantasy",
          "Romance",
          "Short Story",
          "Female Lead",
          "Low Fantasy",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters"
        ]
      },
      {
        title: "Sylver Seeker",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "LitRPG",
          "Magic",
          "Male Lead",
          "Reincarnation"
        ]
      },
      {
        title: "The Gilded Hero",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Psychological",
          "GameLit",
          "LitRPG",
          "Magic",
          "Portal Fantasy / Isekai"
        ]
      },
      {
        title: "Paladin",
        tags: [
          "Action",
          "Adventure",
          "Sci-fi",
          "Male Lead",
          "Strategy",
          "Strong Lead"
        ]
      },
      {
        title: "Heart of Dorkness",
        tags: [
          "Adventure",
          "Fantasy",
          "Female Lead",
          "LitRPG",
          "Magic",
          "Mythos",
          "Portal Fantasy / Isekai",
          "Progression",
          "Villainous Lead",
          "Xianxia"
        ]
      },
      {
        title: "Peculiar Soul",
        tags: [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "Grimdark",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Supernatural",
          "Urban Fantasy"
        ]
      },
      {
        title: "The Courting of Life and Death",
        tags: [
          "Drama",
          "Fantasy",
          "Historical",
          "Horror",
          "Anti-Hero Lead",
          "Female Lead",
          "High Fantasy",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters",
          "Mythos",
          "Non-Human lead",
          "Progression",
          "Ruling Class",
          "Steampunk",
          "Strong Lead",
          "Supernatural"
        ]
      },
      {
        title: "Fluff",
        tags: [
          "Action",
          "Comedy",
          "Drama",
          "Sci-fi",
          "Female Lead",
          "LitRPG",
          "School Life",
          "Secret Identity",
          "Slice of Life",
          "Super Heroes",
          "Villainous Lead"
        ]
      },
      {
        title: "Magic-Smithing ",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Female Lead",
          "GameLit",
          "Gender Bender",
          "High Fantasy",
          "Magic",
          "Reincarnation",
          "Slice of Life",
          "Strong Lead"
        ]
      },
      {
        title: "The Zombie Knight Saga",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Horror",
          "High Fantasy",
          "Male Lead",
          "School Life",
          "Super Heroes",
          "Supernatural",
          "Urban Fantasy"
        ]
      },
      {
        title: "Fantasia",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Romance",
          "Female Lead",
          "LitRPG",
          "Slice of Life",
          "Strong Lead",
          "Virtual Reality"
        ]
      },
      {
        title: "Vaudevillain",
        tags: [
          "Action",
          "Comedy",
          "Sci-fi",
          "GameLit",
          "LitRPG",
          "Male Lead",
          "Super Heroes",
          "Villainous Lead",
          "Virtual Reality"
        ]
      },
      {
        title: "Villager Three",
        tags: [
          "Adventure",
          "Drama",
          "Fantasy",
          "Female Lead",
          "LitRPG",
          "Magic",
          "School Life",
          "Secret Identity",
          "Slice of Life",
          "Strong Lead"
        ]
      },
      {
        title: "Brimstone Fantasy",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Sci-fi",
          "Cyberpunk",
          "LitRPG",
          "Magic",
          "Male Lead",
          "Portal Fantasy / Isekai",
          "Reincarnation"
        ]
      },
      {
        title: "The Menocht Loop",
        tags: [
          "Adventure",
          "Contemporary",
          "Fantasy",
          "Psychological",
          "High Fantasy",
          "Loop",
          "Magic",
          "Male Lead",
          "Progression",
          "Soft Sci-fi",
          "Strategy",
          "Strong Lead",
          "Urban Fantasy"
        ]
      },
      {
        title: "Digital Marine",
        tags: [
          "Action",
          "Adventure",
          "Sci-fi",
          "Female Lead",
          "LitRPG",
          "Space Opera",
          "Virtual Reality",
          "War and Military"
        ]
      },
      {
        title: "The Houndsman [Base-Building LitRPG]",
        tags: [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Male Lead",
          "Mythos",
          "Progression",
          "Strategy",
          "Supernatural"
        ]
      },
      {
        title: "Ben's Damn Adventure: The Prince Has No Pants",
        tags: [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Dungeon",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Male Lead",
          "Multiple Lead Characters",
          "Portal Fantasy / Isekai",
          "Strong Lead"
        ]
      },
      {
        title: "Knight and Smith",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Romance",
          "High Fantasy",
          "Male Lead",
          "Strong Lead"
        ]
      },
      {
        title: "The Breath of Creation [DROPPED]",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Magic",
          "Martial Arts",
          "Multiple Lead Characters",
          "Portal Fantasy / Isekai",
          "Reader interactive",
          "Reincarnation",
          "Strong Lead",
          "Supernatural",
          "Wuxia"
        ]
      },
      {
        title: "Evil Overlord: The Makening",
        tags: [
          "Comedy",
          "Fantasy",
          "Satire",
          "Magic",
          "Male Lead",
          "Villainous Lead"
        ]
      },
      {
        title: "Coeus?",
        tags: [
          "Action",
          "Comedy",
          "Romance",
          "Sci-fi",
          "School Life",
          "Slice of Life",
          "Supernatural",
          "Virtual Reality"
        ]
      },
      {
        title: "Forgotten Conqueror",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "School Life",
          "Supernatural"
        ]
      },
      {
        title: "Summon Imp!",
        tags: [
          "Adventure",
          "Fantasy",
          "Anti-Hero Lead",
          "High Fantasy",
          "Low Fantasy",
          "Magic",
          "Non-Human lead",
          "Slice of Life"
        ]
      },
      {
        title: "The Primal Hunter",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Psychological",
          "Anti-Hero Lead",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Magic",
          "Male Lead",
          "Mythos",
          "Progression",
          "Ruling Class",
          "Strong Lead",
          "Supernatural"
        ]
      },
      {
        title: "Infinite Realm: Monsters & Legends",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Anti-Hero Lead",
          "Female Lead",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Male Lead",
          "Martial Arts",
          "Multiple Lead Characters",
          "Portal Fantasy / Isekai",
          "Progression",
          "Strong Lead",
          "Xianxia"
        ]
      },
      {
        title: "Katalepsis",
        tags: [
          "Contemporary",
          "Fantasy",
          "Horror",
          "Romance",
          "Female Lead",
          "Magic",
          "Supernatural",
          "Urban Fantasy"
        ]
      },
      {
        title: "The Obsidian Core",
        tags: [
          "Action",
          "Adventure",
          "Fantasy",
          "Dungeon",
          "GameLit",
          "High Fantasy",
          "LitRPG",
          "Low Fantasy",
          "Magic",
          "Non-Human lead",
          "Strategy",
          "Supernatural"
        ]
      },
      {
        title: "The Law of Averages",
        tags: [
          "Adventure",
          "Comedy",
          "Fantasy",
          "Sci-fi",
          "Male Lead",
          "Portal Fantasy / Isekai",
          "Slice of Life",
          "Super Heroes"
        ]
      },
      {
        title: "The Scourged Earth",
        tags: [
          "Action",
          "Adventure",
          "Horror",
          "Sci-fi",
          "Cyberpunk",
          "Grimdark",
          "LitRPG",
          "Magic",
          "Male Lead"
        ]
      }
    ];
    for (let i = 0; i < data.length; i++){
      const storyInfo = data[i];
      const story = await Story.findOne({ where: { title: storyInfo.title } })
      if (!story) continue;
      for (let j = 0; j < storyInfo.tags.length; j++){
        const tagInfo = storyInfo.tags[j];
        const tag = await Tag.findOne({ where: { name: tagInfo } });
        const newTagInfo = {
          storyId: story.id,
          tagId: tag.id
        }
        values.push(newTagInfo)
      }
    }
    return queryInterface.bulkInsert('TagJoins', values, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('TagJoins', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
