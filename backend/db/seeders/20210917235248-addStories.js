'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    // const result = []
    // for (let i = 1; i <= 3; i++) {
    //   // Grabbing the data from a trending page
    //   const { data } = await api.fictions.getPopular(i);

    //   // Mapping each story's data down to what I need
    //   const stories = data.map((fic) => {
    //     const newStory = {};
    //     newStory.title = fic.title;
    //     newStory.description = fic.description;
    //     newStory.pageCount = fic.stats.pages;
    //     newStory.linkUrl = `https://www.royalroad.com/fiction/${fic.id}`;
    //     newStory.imageUrl = fic.image;
    //     return newStory;
    //   });
    //   // Adding each story to my array
    //   result.push(...stories);
    // }
    // return queryInterface.bulkInsert('Stories', result, {});
    return queryInterface.bulkInsert('Stories', [
        {
           title:"Mother of Learning",
           author:"nobody103",
           description:"Zorian is a teenage mage of humble birth and slightly above-average skill, attending his third year of education at Cyoria's magical academy. He is a driven and irritable young man, consumed by a desire to ensure his own future and free himself of the influence of his family, whom he resents for favoring his brothers over him. Consequently, he has no time for pointless distractions or paying attention to other people's problems. As it happens, time is something he is about to get plenty of. On the eve of the Cyoria's annual summer festival, he is killed and brought back to the beginning of the month, just before he was about to take a train to Cyoria. Suddenly trapped in a time loop with no clear end or exit, Zorian will have to look both within and without to unravel the mystery before him. And he does have to unravel it, for the time loop hadn't been made for his sake and dangers lurk everywhere... Repetition is the mother of learning, but Zorian will have to first make sure he survives to try again - in a world of magic, even a time traveler isn't safe from those who wish him ill.\n**********************************\nIf anyone is interested, I have a story-related worldbuilding site that can be found here. I don't update it as often as I should, but there is a fair amount of content there already. It also contains a page with all the fanart, fan translations, audio books and the like - you can reach it directly by clicking this link.\nI have a patreon account for those kind people that want to give me money. It also contains info for those who want to donate via paypal.\nThe story was originally posted on fictionpress, back in 2011. When I reached chapter 91, I started uploading the story to RoyalRoad, one chapter per day. The story will continue to be updated on fictionpress as well as here, and can be reached by clicking on this link if somebody is interested, though at this point there is nothing there that isn't also on RoyalRoad.\n**********************************\nThe cover you see on the side has been made by a fellow RoyalRoad user Sydorow. Thank you for your time and art skills.",
           pageCount:2930,
           linkUrl:"https://www.royalroad.com/fiction/21220",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/21220-mother-of-learning.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"Beware Of Chicken",
           author:"Casualfarmer",
           description:"Jin Rou wanted to be a cultivator who defied the heavens, and surpassed all limits.\nUnfortunately for him, he died, and now I'm stuck here. Arrogant young masters? Heavenly tribulations? Cultivating for days on end, then getting into life or death battles?\nYeah, no thanks. I'm getting out of here.\nIn which a transmigrator decides that the only winning move is not to play.\n\nBeware of Chicken will be updated Monday to Wednesday, and then Friday.",
           pageCount:992,
           linkUrl:"https://www.royalroad.com/fiction/39408",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/beware-of-chicken-aacav1xoeg8.jpg?time=1610566797",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Super Minion",
           author:"Gogglesbear",
           description:"Fortress City has Super Villains, who have evil lairs, and in them they make super weapons. But when a bioweapon is granted super powers of its own, will Fortress City be able to handle the Super Minion?",
           pageCount:999,
           linkUrl:"https://www.royalroad.com/fiction/21410",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/21410-super-minion.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"HIATUS"
        },
        {
           title:"The Perfect Run",
           author:"Void Herald",
           description:"The Perfect Run is now available on Amazon Kindle. \nRyan \"Quicksave\" Romano is an eccentric adventurer with a strange power: he can create a save-point in time and redo his life whenever he dies. Arriving in New Rome, the glitzy capital of sin of a rebuilding Europe, he finds the city torn between mega-corporations, sponsored heroes, superpowered criminals, and true monsters. It's a time of chaos, where potions can grant the power to rule the world and dangers lurk everywhere. \nRyan only sees different routes; and from Hero to Villain, he has to try them all. Only then will he achieve his perfect ending... no matter how many loops it takes.\nThe Perfect Run updates on Tuesday and Saturday. Cover by Vitaly S. Alexius.",
           pageCount:1457,
           linkUrl:"https://www.royalroad.com/fiction/36735",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/36735-the-perfect-run.jpg?time=1604749383",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"The Calamitous Bob",
           author:"Mecanimus",
           description:"The world of Nyil, with its monsters, its knights and its mildly sociopathic gods. Come and see! A soul flees and a soul arrives, blessed by luck. Will she survive? Will she thrive? Will she become a calamity?\nAfter all, luck is such a fickle thing.",
           pageCount:471,
           linkUrl:"https://www.royalroad.com/fiction/44132",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/the-calamitous-bob-aadaqzkf2q8.jpg?time=1623868741",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"A Journey of Black and Red",
           author:"Mecanimus",
           description:"Where am I? What is this! I... I don't remember anything. I am in chains? Why am I in chains?! And why am I so very...\nThirsty.\n \n \nThis is a story of vampires as I believe they should be, with their strengths and weaknesses, with their remnants of humanity and the beast inside. Updates every Friday. Mind the tags. \nCover by Antti Hakosaari: https://www.artstation.com/haco\nSpecial thanks to Svensonsen for getting me started, as well as Omi Nya, Jemima, my patrons and you dear readers, for the support.",
           pageCount:2442,
           linkUrl:"https://www.royalroad.com/fiction/26675",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/26675-a-journey-of-black-and-red.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Virtuous Sons: A Greco Roman Xianxia",
           author:"Ya Boy",
           description:"The saying goes that when a man is born the Fates weave his destiny and swaddle him in it. Then one day the man dies, and the swaddle becomes a shroud. Heaven moves on.\nIt is audacity to question the Fates. Olympus is Olympus. The land of men is the land of men. To transgress that, to cross the line of divinity and scale Olympus Mons? To defy the Fates and cast off their threads?\nThat is hubris. It's a mark that every philosopher bears plainly on their soul.",
           pageCount:371,
           linkUrl:"https://www.royalroad.com/fiction/41330",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/41330-virtuous-sons.jpg?time=1615949828",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Vainqueur the Dragon",
           author:"Void Herald",
           description:"Vainqueur is now available on Amazon! Book 1 (Audiobook 1), Book 2 (Audiobook 2), Book 3. \nVainqueur Knightsbane is your average dragon: a giant, fire-breathing lizard who loves to take naps on his golden hoard, kidnap princesses for fun, and make the life of adventurers miserable. Vainqueur's only pleasure in life is to watch his treasure get bigger, one coin at a time.\nSo when a would-be thief turned unwilling minion tells him about \"classes,\" \"levels,\" and \"quests,\" Vainqueur wonders if maybe, just maybe, he should consider a career change. \nAfter all, why bother hunting monsters for free when you can get paid for it?",
           pageCount:1656,
           linkUrl:"https://www.royalroad.com/fiction/26534",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/26534-vainqueur-the-dragon.jpg?time=1601898849",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"RE: Trailer Trash",
           author:"FortySixtyFour",
           description:"In the year 2045, an MRI mishap transmits Tabitha Moore's mind back into her body in the past. Now it's 1998, she's thirteen years old, and she has to confront her long, miserable lifetime of failures-and once again being trailer trash-all over again.\n...Or, does she?\n/// A re-do story, everyone's guilty pleasure. Updates every month.",
           pageCount:728,
           linkUrl:"https://www.royalroad.com/fiction/21322",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/21322-re-trailer-trash.jpg?time=1619785117",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"Borne of Caution ",
           author:"Fuggmann",
           description:"An irritated Pokemon might tell you to stop what you're doing. An irritated animal will probably just attack you. Pokemon, for all their power, would be open books and a breeze to care for to any competent animal handler on Earth. After a fiery death, a professional zookeeper who never outgrew Pokemon games ends up in the world of Pokemon. The entire world is thrown onto its side.",
           pageCount:707,
           linkUrl:"https://www.royalroad.com/fiction/36950",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/borne-of-caution--aacamocpw4.jpg?time=1603373203",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"The Essence of Cultivation",
           author:"Agranulocytosis",
           description:"After experiencing five years of an adventurer's life, Arcanist Sylar Wershin now spends his days catching up on developments in Essence Studies and teasing apart the functions of arcane trinkets and artifacts discovered by him and his companions throughout their time travelling the realms of Resham. An unexpected accident during the study of his latest subject of intrigue, however, displaces him across the Planes beyond what any known spell is capable of achieving.\nNow finding himself lost in a realm rich in previously-limited Transcendental Essences, however, does he truly even want to return back to his old world? If nothing else, plagiarising - ahem, learning new spell structures by observing the local mages should prove entertaining. Sure, there were new dangers in this foreign world, but they wouldn't be anything a fancy bit of spellwork couldn't solve.\nThough, he would appreciate it greatly if someone could explain to him just what this 'cultivation' business was, why the local Mages were all muscle-brained freaks obsessed with immortality, and why they all seemed to lack any appreciation for the finer details of Essence manipulation. That would be nice.",
           pageCount:189,
           linkUrl:"https://www.royalroad.com/fiction/34710",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/the-essence-of-cultivation-37146.jpg?time=1596484852",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Prophecy Approved Companion",
           author:"Tevagah",
           description:"Qube is an NPC in an AI-driven VR-RPG who avoids her scripted death and blithely continues following the Player, trying to make sense of the normalised nonsense of Fantasy RPGs and accidentally glitching out the world in stranger and stranger ways as she seeks to be the very best Childhood Companion ever.\nIt's a loving parody of old school RPGs, high fantasy, and every gamer who has ever thought \"what happens if I do this...\"\nBOOK ONE COMPLETE. BOOK TWO ONGOING!\nUpdates Tuesdays and Fridays.\nThis is essentially a first draft, so I welcome grammatical corrections etc.\nDiscord: https://discord.gg/XGr5DTN\nCover by: https://www.instagram.com/pengwen.l/",
           pageCount:750,
           linkUrl:"https://www.royalroad.com/fiction/35549",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/prophecy-approved-companion-aabado-dzq4.jpg?time=1598944177",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"There is no Epic Loot here, Only Puns.",
           author:"stewart92",
           description:"She became a dungeon core.\nEverything pointed Delta to murdering her way to success. People were just mana farms, right?\nNo, that was wrong. Delta refused. Then everything became odd.",
           pageCount:1921,
           linkUrl:"https://www.royalroad.com/fiction/15935",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/15935-there-is-no-epic-loot-here-only-puns.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"The Power of Ten, Book Three : The Human Race",
           author:"RE Druin",
           description:"Twice Completed the Royal Road Writathon challenge! \nSuccessor Book to Power of Ten Book One: Sama Rantha, and Book Two: The Far Future. Chapters began 9/5/2020. Chapters are around 2000 words (4 Word Pages) updated daily since Dec. 26, 2018.\n----------------------------\nA shard severed from a soul, full of Karma, but needing a body and life of its own.\nThe first true Rantha Hagbloods.\nA Shrouded Earth invaded by magic, struggling to once again see the sky.\nThree souls with the full knowledge of Power of Ten are on a world in need of something to break the stalemate and suppression of the Shroud of Undeath.\nIt's going to take gold, and Gear, and Levels, but the undead aren't the only enemies that they'll be facing as they strive to liberate a world, and guide it towards the Light of Heaven.\n===========\nPower of Ten has a Patreon for anyone who wants to read advance chapters (up to 35 ahead, and you can even pay annually!). We use a Google Docs system, sending out access emails to our Patrons once Patreon confirms things to our Patrons' gmail accounts. Help support PoT today! :)\nFor those who would like to support me, my Patreon Link is at: Contribute Goldweight to Save the World!\nThe Original Power of Ten/Sama, the Tip of the Spear, is being posted at: \nTremble, She Comes!\nBooks One and Two for Sama Rantha are at: Rantha Hags Forever!\nThe permanent Discord Link is: Your Friendly Allegiance LInk is active!\nI always have Discord up if I'm online, although I may be busy writing and not see it right away...\nCourtesy of the Dread Fluffy Goblyn, I even have a Facebook page! Markspace is active!\nAnd join the Power of Ten Fan page! Tremble We Come!",
           pageCount:3110,
           linkUrl:"https://www.royalroad.com/fiction/35487",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/35487-the-power-of-ten-book-three-the-human-race.jpg?time=1598833961",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Kairos: A Greek Myth LitRPG",
           author:"Void Herald",
           description:"It has been centuries since mortals unlocked the secrets of the Fate System and overthrew Mount Olympus. The old gods are dead, and their thrones are empty. Kairos, a young pirate with the ability to speak with animals, has an ambition: to ascend as the newest deity of a flooded world. But divine power is not given. It is taken.Now Kairos must sail the endless sea, tame fearsome monsters, and conquer new lands. The challenges are many, but he will face them all. For Kairos is a cunning [Rogue] indeed...Cover by Vitaly S. Alexius.",
           pageCount:942,
           linkUrl:"https://www.royalroad.com/fiction/41033",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/kairos-a-greek-myth-litrpg-aacaznppuw8.jpg?time=1614936080",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Lost In Translation",
           author:"Dissonance",
           description:"If you're one to travel the roads, you may have heard of me. You may have heard my Names in the stories, the songs, and the whispers of the road. Perhaps you've even seen me during my travels, speaking to a bird of blue light, or on a city street, performing small acts for coin and repute. Or perhaps you may know me as the Skystrider, who walked with the wind. Or the Voiceless, a man of song without speech. You may know me as the Tutor, who taught the Lion of Summer how to fight, or the Traveler, who has walked all the roads of the earth. I am all of these things.\nAnd people have branded me a myth.\nBut people don't understand what a myth is. They haven't heard the songs lost to our tongues, nor have they seen the things I've seen. They haven't gone to the places I've gone.\nMy feet have walked the plains, the seas, and the clouds. I have spoken languages unspoken; tongues lost to time. I have sung to the earth, held the moon in my arms, and walked the roads that your heroes hesitate to even mention. I have outwitted Demons. I have danced with the Fae. My songs have been heard by lords of wind and ash, and my steps have echoed in the bellies of gargantuan beasts the likes of which you have never seen.\nThese are what real myths are. And me?\nI'm no legend.\nI'm just the bard stupid enough to poke the real ones with a stick.\n\nDiscord link here.\n[Disclaimer: Book 1 of this story will likely be published in KU by around the start of 2022, so please keep that in mind. Book 2 and onwards will continue here until they are published as well.]",
           pageCount:543,
           linkUrl:"https://www.royalroad.com/fiction/41511",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/41511-lost-in-translation.jpg?time=1623947365",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"RE: Monarch",
           author:"Eligos",
           description:"Cairn is a prince who is already tired of ruling. Faced with an imminent coronation and an overbearing father, he wants nothing more than to drown his responsibilities in cheap liquor and poor decisions. With the help of his sister, he hatches a plan to escape the clutches of the throne once and for all. It all goes terribly wrong, and Cairn finds his priorities shifting in the face of unimaginable tragedy. The change of heart comes too late, however, and Cairn dies. He reawakens to find himself transported ten years in the past. He immediately begins to plan for the future, only to discover his killer has somehow followed him. To succeed, Cairn must unite the kingdom and discover the motivation of his killer, using as many tries as it takes. \n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\nI exhausted pretty much every time loop story ever written and decided to write my own. You'll see a few similarities here between this story and some existing stories, at least initially. There's a lot of inspiration drawn from both MoL and Re:Zero, though in terms of pathos and darkness, this story leans more towards the latter. Be warned, it is something of a slow burn. The main character will grow and become powerful, but a theme of this story is that power comes slowly and often at great cost. \nUpdates Monday, Wednesday, and Friday\nCover commissioned from the fantabulous SatoriLotus on Deviant Art",
           pageCount:923,
           linkUrl:"https://www.royalroad.com/fiction/37951",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/37951-re-monarch.jpg?time=1625180330",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"HIATUS"
        },
        {
           title:"Vigor Mortis",
           author:"Thundamoo",
           description:"In a world of sky islands orbiting around a core of mist, humanity is besieged with countless threats.  When a young girl from the slums unwittingly becomes one of those threats, she finds herself capable of horrific things that she can't help but learn to love...  \nVigor Mortis is a lighthearted story about existential terror.  Come for the horror, stay for the hope.  \nUpdates M-Th.  Enjoy the read!",
           pageCount:942,
           linkUrl:"https://www.royalroad.com/fiction/40373",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/40373-vigor-mortis.jpg?time=1622053598",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Azarinth Healer",
           author:"Rhaegar",
           description:"A new world with nearly unlimited possibilities. A status, classes, magic and monsters. Sounds good? Well, for Ilea it didn't come quite as expected as for some other protagonists, nor was there a king or god to welcome her.\nThe grand quest? Well, she might figure that out someday but for now, a new world with new food is prize enough. Her fists at the ready, she's prepared to punch and get punched, however long it takes and however many limbs she might have to regrow.\nA story I've started writing now quite a while ago. Transported to another world, somewhat standard fantasy setting with my beginner attempts to make it dark but funny. There are Litrpg elements here but I do hope it's not too heavy and annoying. The fights should be interesting and aren't just numbers vs numbers. Contrary to the title the protagonist will be quite an offensive fighter.\nIlea Spears is your average sarcastic kick-boxing fast food worker and soon to be student. She will be transported to another world rather conventionally and will be confronted with survival in the wild.\nGive it a shot and let me know what you think. My experience is incredibly lacking. If you find yourself hating it early on, do convey your anger in a detailed comment or review :) I want to get better but without any feedback it's simply quite difficult.\nQuick heads up: Around chapter 120 there are a bunch of longer PoV changes that I discontinued again shortly after. The Arc around chapters 150-200 is darker than the rest and the themes shift quite a bit. Just know that it goes back to what you've come to know after that section.\nThank you for reading.\nQuick update June 2019: Many complaints regarding the formatting, specifically spacing in conversations and of course the usage of the present tense in the first 36 chapters have been addressed. I'm of course learning by the day but compared to how it was before it should be an improvement at least.\nChapters usually around 3k words\nCover art by Kevin Catalan",
           pageCount:8185,
           linkUrl:"https://www.royalroad.com/fiction/16946",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/16946-azarinth-healer.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"The Many Lives of Cadence Lee",
           author:"vladerag",
           description:"Cadence Lee thought she was a normal girl, perhaps a little well to do, but not exceptionally so.  She had her college classes, she had her job that her uncle gave her, and she had a nice boyfriend who was sweet if a little awkward.\nExcept, when a mugger accosts Cadence and her boyfriend attempts to wrestle a gun away from the criminal, Cadence ends up shot.  A normal girl, with the kind of wound Cadence had, would die.  Cadence managed to do that part.  But a normal girl wouldn't then open her eyes again and learn that death is not as permanant for her as it is for other people.  She can be reborn again, and again.  Each time stronger and with new abilities.\nThe catch?  Any world she is born into, she can never return to.  She has infinite lives, but only one life for each.\nSo begins The Many Lives of Cadence Lee.\n[participant in the Royal Road Writathon challenge]",
           pageCount:576,
           linkUrl:"https://www.royalroad.com/fiction/35925",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/35925-the-many-lives-of-cadence-lee.jpg?time=1601484088",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Romantically Apocalyptic",
           author:"Vitaly S Alexius",
           description:"https://www.rom.acYou are walking west. You find a wishing well. You wish for it to grant infinite wishes for every human being on earth. The Universe is now broken. The current weather is apocalypse with chances of fallout and nuclear winter. Also, everyone is dead. Good job. \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nA post-apocalyptic, dark comedy that I've been working on since 2005.Support RA at: https://www.patreon.com/captainJoin our discord: https://discord.gg/ngawayz",
           pageCount:346,
           linkUrl:"https://www.royalroad.com/fiction/34708",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/34708-romantically-apocalyptic.jpg?time=1614298734",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"The Stars Have Eyes",
           author:"Exterminatus",
           description:"The universe was a vast, empty, dark, and uncaring place. Then life happened, and the universe was changed forever. Only a teeny-tiny bit, but definitely different. Then again, the universe changes a teeny-tiny bit every second of every day. For instance, if someone were to get off the couch and randomly drink a glass of milk? Bam! One less glass of milk in the universe. Changed forever. Well, excluding any time-travel shenanigans, but anyone who puts a big old hole in the time-space continuum just to un-drink a glass of milk should really reevaluate their priorities. Unless, of course, they were attempting to prevent some massive catastrophe vis-a-vis said glass of milk. Such a scenario is by no means impossible, as one should never underestimate the importance of calcium.\nAnother important tip for any life forms out there is to keep things in perspective. Some look at the vastness of creation in relation to themselves and go, 'Man, this sucks!' These people really need to narrow their focus. Sure, they will never affect anything happening on the other end of the galaxy, but so what? That's way the heck over there, where it doesn't matter. Therefore, in order to maintain a healthy mindset, it is important to narrow one's perspective to the things and people that affect them, and that they can affect in turn.\nBut what happens if one is an unfathomable cosmic being from beyond the veil of reality? What happens when such an existence is capable of influencing entire swathes of the universe just by its presence? A creature such as Magh'rathlak the Observer? That particular entity is only about average as far as reality-warping creatures from the dawn of time go, so its influence over the fabric of reality is rather limited. And it still struggles to keep things in perspective. That, among other things, is why it decided to narrow its worldview a bit by compressing the maddening vastness of its being into a single corporeal form. Magh'rathlak had never tried such a feat, but that wasn't about to stop it.\nAfter all, how hard could being human possibly be?",
           pageCount:586,
           linkUrl:"https://www.royalroad.com/fiction/33261",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/33261-the-stars-have-eyes.jpg?time=1591968748",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"Castle Kingside (Rewrite)",
           author:"Gennon Asche",
           description:"A puzzling encounter leaves Dimitry a beggar with a strange emblem on his wrist. Around him, people suffer as ruthless organizations, opportunistic nobles, and an overly pious church vie for power in a medieval land under constant siege by stone monstrosities rampaging from the coasts.\nCan a kindhearted surgeon aid this ailing world with modern knowledge, resourcefulness, and magic? Or will rival powers crush Dimitry first?\nA fiction that starts brutally grim and eventually transitions into technology uplift with a focus on science, magitech, and town building.\nWarning: Technical terms abound.\nCover art by AbsolutePower.",
           pageCount:1179,
           linkUrl:"https://www.royalroad.com/fiction/43462",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/castle-kingside-rewrite-aababfaiva8.jpg?time=1621963770",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"The Calamity of a Reborn Witch",
           author:"Vera Anne Wolf",
           description:"**WARNING: The following story contains DARK, TRAUMATIZING elements that may not be appropriate for young viewers or those who struggle from traumatizing events. If you're not good with mature content, regardless of your age, this story is not for you. You have been warned. It's nowhere near as bad as GOT but it has dark shit. Again, you have been WARNED. Plenty of other less dark webnovels to safely read. **\n**Additional Warning: A minimal amount of LGBT content is included in this story. There is no TAG for this so I'm including it here. If that makes you uncomfortable, go ahead and give it a pass. **\n \nPreviously titled: A Maiden's Frozen Heart.\nAn Isekai, Fantasy Regency, Thriller with Witches, Gods, and plenty of Drama and Betrayal.\n\n{Book 1: A Den of Wolves} \nWhat if you knew the future? But what if that future was not yours?\nAfter a gruesome death, Carina was reborn in Lafeara as Lady Maura, the unwanted \"half-blood\" of an impoverished noble family. The previous Lady Maura was publicly executed as part of a conspiracy to conceal the murder of Queen Eleanora.\nWith Maura's memories to guide her, Carina prepares to follow her predecessor's path into the palace as part of the Selection to become Crown Princess Eleanora's lady-in-waiting. Her meticulous years of planning and preparation to ensure her survival, fulfill Maura's revenge, and avert the oncoming Calamity will require every ounce of courage, cunning, and intellect she can muster.\nBecause Carina has more than one secret which she can not reveal-her true identity among them-but even more treacherous is her frozen heart and the ice magic that comes with it.\nAfter all, they still burn witches in Lafeara.\n\n{Book 2: A Coven of Crows} \nThe problem with changing the past is that the future changes with it.\nAlthough Carina survived the Selection and earned a place in the palace beside the Crown Princess, her battle to change the future and protect Lady Hana, the future Queen's favored lady-in-waiting, is far from over.\nAs Carina becomes further entwined in the hidden witch covens of Lafeara, their history and magic unravel a dangerous secret long forgotten by most. It is not just Maura's memories that threaten to shift the balance of Carina's carefully laid plains but her own forgotten past as well.\nAnd the more mysteries Carina uncovers, the fewer allies she finds standing on her side. Everyone wants something, but the most dangerous players in this game of mortals and witches are the gods themselves, who have their own sordid plans for Carina's frozen heart.\n{Book 3: A Plague of Witches} \nComing Soon...",
           pageCount:1912,
           linkUrl:"https://www.royalroad.com/fiction/32908",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32908-the-calamity-of-a-reborn-witch.jpg?time=1616584701",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Shade Touched",
           author:"Zat",
           description:"A monster is born in the depths of the wilds, but she isn't like her siblings. Curiosity colors her every thought, and a hunger for understanding grows within this little creature. The world is full of wonders just waiting to be discovered! She's not just hunting for her next meal, her prey is something far greater: knowledge. But as wonderful as it is, discovery alone is missing half the point. After all, what joy is there in finding the next amazing thing when there's no one to share it with?\n\n\n\nAiming to update Monday and Friday!\nCheck out the Discord! Come over and hang out!\nIf you would like to read some chapters early, consider donating to my Patreon!\nCover art by the amazing Kailey!Twitter @kbearart \nFull-size cover here.Full banner pic here.\nGore tag for some somewhat graphic fight scenes. Profanity tag because there may be some explicit language, it shouldn't be excessive.",
           pageCount:572,
           linkUrl:"https://www.royalroad.com/fiction/34473",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/34473-shade-touched.jpg?time=1602489593",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"HIATUS"
        },
        {
           title:"Never Die Twice",
           author:"Void Herald",
           description:"Now available on Amazon Kindle! Walter Tye is the best friend any adventurer needs. He is the smiling shopkeeper next to your local dungeon, the one who sells you these cheap healing potions. When you need information about a monster, Tye always knows. He wants to help; you can trust him.He is also the undead necromancer ruling said dungeon, getting paid to solve problems that he caused in the first place. But don't tell anyone that... Story sponsored by knightaether.",
           pageCount:506,
           linkUrl:"https://www.royalroad.com/fiction/32067",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32067-never-die-twice.jpg?time=1606227934",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Seaborn",
           author:"captaink-19",
           description:"Domenic is a sailor who just wants a life at sea. A brewing war between nations turn the already dangerous seas into something perilous. Domenic is forced into an untenable position, one he escapes with his life - though there is a greater cost he'll have to pay after his deal with the devil.\nJoin Domenic as he explores the meaning and cost of both servitude and freedom!\nNew content weekly!  (Sundays in the U.S.)\n\nJack Voraces is narrating this story - and doing a fantastic job of it!  Listen in on his work and you can even pitch in on how you think things should sound.  The artwork done by Clara while he narrates is awesome too!  Check him out at these links:\n\nFor discord:  discord.gg/6B5hJdx\n\nTwitch:  www.twitch.tv/jackvoraces",
           pageCount:1145,
           linkUrl:"https://www.royalroad.com/fiction/30131",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/30131-seaborn.jpg",
           warnings: JSON.stringify({ warnings: ['Gore']}),
           status:"ONGOING"
        },
        {
           title:"Dungeon Crawler Carl Book 5: The Hunting Grounds",
           author:"DoctorHepa",
           description:"Dungeon Crawler Carl Book 1 is now on Amazon! mybook.to/dungeoncrawlercarl\nBook 2 is also now available! mybook.to/dungeoncrawlercarl2Royal Road and Patreon is where to get the newest chapters and releases. \nThe apocalypse will be televised!\nA man. His ex-girlfriend's cat. A sadistic game show unlike anything in the universe: a dungeon crawl where survival depends on killing your prey in the most entertaining way possible.In a flash, every human-erected construction on Earth-from Buckingham Palace to the tiniest of sheds-collapses in a heap, sinking into the ground.The buildings and all the people inside have all been atomized and transformed into the dungeon: an 18-level labyrinth filled with traps, monsters, and loot. A dungeon so enormous, it circles the entire globe.Only a few dare venture inside. But once you're in, you can't get out. And what's worse, each level has a time limit. You have but days to find a staircase to the next level down, or it's game over. In this game, it's not about your strength or your dexterity. It's about your followers, your views. Your clout. It's about building an audience and killing those goblins with style.You can't just survive here. You gotta survive big.You gotta fight with vigor, with excitement. You gotta make them stand up and cheer. And if you do have that \"it\" factor, you may just find yourself with a following. That's the only way to truly survive in this game-with the help of the loot boxes dropped upon you by the generous benefactors watching from across the galaxy.They call it Dungeon Crawler World. But for Carl, it's anything but a game.\nDCC Discord! \n10/01/20\nThe first several chapters of DCC are now off of Royal Road because the book is on Amazon. I want to thank all of you for 9 months of amazing support. This is and Patreon will always be the place for the newest chapters and content, but to comply with Amazon's Kindle Unlimited policy, I can't have more than 10% of the story up here. \n \n \nThis is a work in progress. Major editing will be done after the book is complete, so there will be egregious typos and parts that make no sense whatsoever. Please, please feel free to point any and all of these things out. Chapters WILL get edited, and that editing might break earlier chapters. I will attempt to keep readers apprised of all changes. Updates one-two days a week.",
           pageCount:153,
           linkUrl:"https://www.royalroad.com/fiction/29358",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/29358-dungeon-crawler-carl.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"STUB"
        },
        {
           title:"The Iron Teeth:  A Goblin's Tale",
           author:"ClearMadness",
           description:"A new, darker age is dawning. The greed of kings has ignited a seemingly endless war. As men fight, the monsters of the untamed wilds are devouring the frontier. Villages are abandoned as fields go fallow. Murderous bandits roam the desolation. None of that matters to a nameless goblin slave. He just wants to eat as much food as he can shove into his mouth when no one is looking, but fate runs a twisted course, so instead he is whisked away to the far off Iron Teeth Mountains. To stay alive, he will have to evolve into something more than a simple goblin, and carve a bloody path through the forests of the North. However, first he has to get over his crippling fear of trees, and survive in a place where everything considers him to be the perfect size for a quick snack...\n\nExpanded and edited books are availible at Amazon.\nDon't forget to vote every week at TopWebFiction, thanks.",
           pageCount:2799,
           linkUrl:"https://www.royalroad.com/fiction/4293",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/4293-the-iron-teeth-a-goblins-tale.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"Tower of Somnus",
           author:"Cocop (Cale Plamann)",
           description:"When humanity first encountered alien life, we were judged and found wanting.  \nThe Galactic Consensus interviewed our leaders and subjected us to a battery of psychological tests to determine our progress as a society.  They found us to be selfish, wasteful, impulsive, and boorish neighbors.  Earth was blockaded and our collective encounter with our extrasolar neighbors rapidly faded from memory.\nAll they left behind was a hypercomm relay and a handful of subscriptions to a massively multiplayer game that participants played in their sleep.  The Consensus said that it would let us interact with our neighbors in a controlled setting.  That it would teach us to be better members of the galactic community.\nThe megacorporations that controlled Earth ignored the game until they learned that the powers earned from clearing dungeons were just as real when day broke.  Magic, supernatural abilities and rumors exploded from nothing and a subscription to The Tower of Somnus became a status symbol.\nKatherine 'Kat' Debs doesn't have much, but it could be worse.  Born in an arcology, she was assigned a job in the megacorporation that raised her almost as soon as she could work.  Despite the stability of her corporate life, she wanted something more.  A chance to claw her way up the rigid social and financial ladder to make something of herself.\nA chance that wouldn't come naturally to someone as familiar with dark alleyways and the glint of steel as she was with office work and corporate niceties.Cover art by Faewild\nColoring/shading by KrazeKode\n- - - - - -Book One was  a National Novel Writing Month/Writeathon entry.  Book one has zero editing or proofreading.As a warning, this WILL eventually go to Kindle Unlimited (meaning each book will come down shortly before I publish it).",
           pageCount:1193,
           linkUrl:"https://www.royalroad.com/fiction/36983",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/36983-tower-of-somnus.jpg?time=1606069018",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"Stray Cat Strut - A Young Lady's Journey to Becoming a Pop-Up Samurai",
           author:"RavensDagger",
           description:"In the year 2057, the world has become a corporate-run utopia for the super-rich, and a hellhole for all the rest. \nCatherine 'Cat' Leblanc is an orphan that is about as far from super-rich as one can be. When the Incursion alarms start blaring and the sky starts raining hungry xenos, it's just another blemish on an already piss-poor afternoon. \nA cyberpunk magical-girl alien-invasion LitRPG.\nIt's exactly as wild as it sounds.",
           pageCount:1024,
           linkUrl:"https://www.royalroad.com/fiction/33600",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/33600-stray-cat-strut-a-young-ladys-journey-to.jpg?time=1621627122",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content']}),
           status:"ONGOING"
        },
        {
           title:"Epilogue",
           author:"Etzoli",
           description:"In the war-torn land of Cyraveil, four heroes strove to overthrow an empire. By cold steel and elemental sorcery, they brought peace to a warring land on the brink of destruction. As the flames died, the realm needed strong leadership, and who better than the champions who had saved the kingdom? But when the people sought out their saviors... they vanished.\nMatt, Blake, Jen, and Carl: the four mysterious companions, who together had deposed an insane ruler and saved countless lives, were gone-spirited back in a whirlwind of magic to a sleepy suburb in Mellbridge, Oregon, never to return. The friends found themselves home in the real world, exactly as they'd been the night they were taken, as if no time had passed... except only three came back.\n  \n \n\n \nHi there! This was my entry for National Novel Writing Month, because why only write one series at a time? The more the merrier! (meanwhile, my keyboard bursts into flames...)\nI'm also the writer of The Last Science, an ongoing low-fantasy/speculative sci-fi series. If you're familiar with that, you know what to expect here: lots of character-focused drama and dialogue, not a whole lot of traditional action. However, I'm writing a bit differently than usual here, and in a very different structure, so there should be some surprises for returning readers. I hope you enjoy it!\n [Discord] - for those of you who want to hang out and chat.\n \nCover art (fullsize): Path of Revelation, by taenaron (Tobias Roetsch), modified by Etzoli. Normally I like to do my own cover art from scratch, but I was in a rush for the contest. Might be replaced down the line if I get time.\n[winner of the NaNoWriMo Royal Road 2018 challenge-Most Favorites]\nThis story has not been posted or published anywhere else besides RoyalRoad.com, at this URL: https://www.royalroad.com/fiction/21374/epilogue",
           pageCount:352,
           linkUrl:"https://www.royalroad.com/fiction/21374",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/21374-epilogue.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"12 Miles Below",
           author:"Mark Arrows",
           description:"The world is in ruins. \nExtreme sub-zero temperatures suffocate the surface, making even simple survival an ordeal. Frozen derelicts of bygone eras span across massive ice wastes. And the elite few hoard any technology rediscovered within.\nThe only escape from the deadly climate is beneath the surface. But it's another disaster underground. Monstrous machines lurk in the depths. Unhinged demigods war against them, dying over and over, treating it all like a game. The land itself shifts over time, more contraption than rock. And an ominous prophecy states that the key to everything waits at the last level - but nobody's ever reached that far. \nWhen an expedition into the far uncharted north goes terribly wrong,  Keith Winterscar and his father get trapped together in a desperate fight for survival. Stumbling upon an ancient power struggle of titanic scale; the two will need to set their differences aside while they struggle against sinister gods, deadly legends, and the grand secrets of the realm that lies below. \n\nAuthor's note: Updating Monday and Thursdays. This is a long planned out fic. If you're looking for a power fantasy where the MC gets everything right all the time, this ain't it. Fights get hairy, people get greedy. Bad descisions happen on incomplete information - and I don't write fake-failures where those mistakes don't matter. When the whammy moments come, they'll be earned. \n[Dungeon-lite and gamelit-lite, though both start being relevant much later.]",
           pageCount:532,
           linkUrl:"https://www.royalroad.com/fiction/42367",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/12-miles-below-aacawm8nja8.jpg?time=1618703511",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"Cinnamon Bun",
           author:"RavensDagger",
           description:"The world called out for a hero to purge it of a great evil. It received Broccoli Bunch, explorer, expert cleaner, occasional ghost-buster, and full time Cinnamon Bun. \n \nFeatures include:\nTalking enemies into becoming friends\nHugging menu boxes\nAwesome overpowered skills (such as Cleaning, and Gardening)\nAnd more adventure than you could shake a stick at! \n\n Follow Broccoli on her personal quest to make all the friends. All of them.\n\nUpdates: Monday, Wednesday, Friday!\nNow Available in ebook and paperback formats here:\nVolume One - Amazon\nVolume Two - Amazon",
           pageCount:1828,
           linkUrl:"https://www.royalroad.com/fiction/31429",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/31429-cinnamon-bun.jpg?time=1587657139",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Threadbare",
           author:"Andrew Seiple",
           description:"BREAKING ANNOUNCEMENT! Threadbare Volume 1: Stuff and Nonsense, Volume 2: Sew You Want to be a Hero, and Volume 3: The Right to Arm Bears are now available on Amazon.com! For US residents, you can find them at the following links: Volume 1, Volume 2, Volume 3.  Residents of other countries, please browse your local Amazon market. Meet Threadbare. He is twelve inches tall, full of fluff, and really, really bad at being a hero. Magically animated and discarded by his maker as a failed experiment, he is saved by a little girl. But she's got problems of her own, and he might not be able to help her.Fortunately for the little golem, he's quick to find allies, learn skills, gain levels, and survive horrible predicaments. Which is good, because his creator has a whole lot of enemies...Advance chapters are now available on my Patreon, for those who wish to read ahead.(Cover by Amelia Parris)My name is Andrew Seiple, I'm an author and a long time roleplayer. I am the writer of Threadbare, and I own the rights to this story, and many others. I've published works on Amazon before Threadbare, but this is my first litrpg. You can find my various stories available on Amazon.com",
           pageCount:1641,
           linkUrl:"https://www.royalroad.com/fiction/15130",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/15130-threadbare.jpg?time=1612219296",
           warnings: JSON.stringify({ warnings: ['Profanity']}),
           status:"ONGOING"
        },
        {
           title:"ARMOR",
           author:"Seersucker",
           description:"I was created as the ultimate dungeon trap: a living suit of armor that devours any adventurer who dons me. My master created me for his entertainment, leading adventurers to ruin and betraying them at the last moment. This time will be no different. \nOr so I thought. \nNow I'm living the life of an adventurer. Hopefully, my companions won't realize I'm not who, or what, they think I am.\n\n*Updates Thursdays",
           pageCount:120,
           linkUrl:"https://www.royalroad.com/fiction/43947",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/43947-armor.jpg?time=1624737542",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"Path of the Dragon Mage",
           author:"S.G. Seabourne",
           description:"(LitRPG/GameLit)\nBorn magically talentless, Prince Corvus is an embarrassment the royal family and is removed from succession. However, he still has a chance to win back his throne. The next man or woman to hatch a dragon automatically becomes the ruler. Each member of the royal family is gifted with a dragon egg, but it is the work of a lifetime to hatch it.\nThe first time Corvus touches his dragon egg, he receives an odd notification: He has found a soulbound item and is tasked with an epic quest to hatch it... but only if he can walk the winding path of the dragon mage.\nArmed with notifications, skill increases, and levels only he can see, Corvus is determined to hatch his dragon.",
           pageCount:612,
           linkUrl:"https://www.royalroad.com/fiction/40062",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/40062-path-of-the-dragon-mage-exiled.jpg?time=1614199005",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"The Devil's Foundry",
           author:"Argentorum",
           description:"How I learned to stop worrying and solve my problems with demons until demons stopped solving my problems.\n-\nA snarky villain and her heroic nemesis blow themselves up and land on a fantasy world. They find themselves faced with two prospects: learn to cooperate and respect someone they've fought against for years, or be swept away by the powers that be.\nBecause Pride always comes before the fall.",
           pageCount:263,
           linkUrl:"https://www.royalroad.com/fiction/36804",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/36804-the-devils-foundry.jpg?time=1604253167",
           warnings: JSON.stringify({ warnings: ['Profanity']}),
           status:"HIATUS"
        },
        {
           title:"The Hedge Wizard",
           author:"Alex M",
           description:"A Dungeons and Dragons inspired adventure with a realism-focused spin on gamelit.\nHump grew up believing his master was nothing but an ordinary hedge wizard. However when the old man unexpectedly dies, his book of spells binds to Hump's soul. Now without a master, Hump sets off to find his place in the world, to discover the secrets of magic, and to understand the Book of Infinite Pages.\nBook 1 - Crypt of the Wolf Dragon\nUpdates Tuesday and Saturday.\nDiscord: https://discord.gg/RNJWmVJVwx",
           pageCount:372,
           linkUrl:"https://www.royalroad.com/fiction/43181",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/43181-the-hedge-wizard-tis-but-a-scratch-tricksters.jpg?time=1624032173",
           warnings: JSON.stringify({ warnings: ['Gore']}),
           status:"ONGOING"
        },
        {
           title:"I Became a [Biologist] in a Fantasy World!",
           author:"Innate_Lymphoid_Cell",
           description:"I loved Biology - always have, and always will. Unfortunately for me, years of fruitless research whittled away what little joy I had left in what I did. Escapism came in the form of reading isekai works, where the stresses of real life seemed so far away.Luckily, I was summoned to a fantasy world of magic, dragons, and other mythical beasts. I didn't even need to deal with the Demon Lord threat, since it seemed that my summoning was a mistake, and all they needed was the Hero who was coincidentally summoned together with me! There was no revenge subplot, no hidden trap directed against me, and they even paid me compensation for their mistake. At long last, I could finally do what I ever wanted to do - experiment for the fun of it!With my new class as a [Biologist], none of this fantasy world's mysteries will be left untouched. Even if the Demon Lord himself comes knocking, nothing will stop me from researching every nook and cranny there is to discover of the magical biology of this world!\n----I write extremely casually, and purely for leisure. Updates will likely be irregular, depending on when inspiration strikes and whether I can spare the time to work on this. Don't expect too much out of this, and certainly not anything close to professional quality!\nInspired by an overconsumption of Japanese light novels, manga, and anime... expect their influence to slowly but surely take hold.",
           pageCount:272,
           linkUrl:"https://www.royalroad.com/fiction/33378",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/33378-i-became-a-biologist-in-a-fantasy-world.jpg?time=1592326018",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"The Eagle's Flight",
           author:"Quill",
           description:"The king is dead; his heir is too young to assume the throne. Jarl Vale wants to become Lord Protector, spurred by his ambitious brother Konstans. Jarl Isarn likewise seeks this power; he is aided - or thwarted - by the return of his brother, the knight and war hero Athelstan, whose squire, Brand, hopes to restore his family's fortunes, cost what it may. Through all of this, an enigmatic traveller makes plans with jarls, scribes, and priests for his own purpose. Abroad, powerful forces sense division in the realms of Adalmearc and make their own plans. It is only a matter of time before schemes clash, plots collide, and conflict erupts. War is on the horizon.\nStory updates every Wednesday with a new chapter from the third book of the series. The first and second book can be downloaded as ebooks from my site, where a map of the world or of Middanhal can be viewed. The site also contains other background information such as history of the realms, pantheon and religion, calendar etc.\nIt is now also available in audio as a weekly podcast from webcereal.",
           pageCount:2687,
           linkUrl:"https://www.royalroad.com/fiction/9500",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/9500-the-eagles-flight.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Wildcards: Book Two - The Dread Captain",
           author:"James Northman",
           description:"At the District One Invitational, a rookie eSports team defied all odds and reached the finals. Their underdog story and humble beginnings elevated them to worldwide acclaim. Media corporations dubbed them, The Paragons. With their main competition eliminated from the tournament during the semifinals, the rookie team sailed through the live finals and won by a landslide. Their prize was to become the first ever players in the most exclusive VR game yet, Abidden. \nThe Paragons never celebrated that semi-final victory. They lost a friend in that match, who never appeared online again. Ten years later, the gaming landscape has changed and Abidden with it. Helena is the last remaining Paragon. Her team now consists of celebrities, influencers and musicians. Abidden has been reduced to a shadow of its former glory, but is the most streamed and viewed game in the world, despite having only a handful of players.\nNone of this matters to James Sylvester. Finally out of hospital, things aren't good for James. He's found himself crippled with medical debt, his gaming licence has been revoked and he's permanently lost his place in society. He now spends his days competing in illegal slum arcades to manage the repayments. When a high-profile job comes along, James gets temporary backdoor access to his blacklisted gaming account. After reactivating it for the first time in ten years, James receives an invitation that could change his life forever.\n\nDisclaimer: This story is in no way or form associated with the works of George R. R. Martin and has no link to the popularised series, Wild Cards. This is a LitRPG story of my own creation that shares that name.",
           pageCount:605,
           linkUrl:"https://www.royalroad.com/fiction/32659",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32659-wildcards-book-two-the-dread-captain.jpg?time=1629339157",
           warnings: JSON.stringify({ warnings: ['Profanity']}),
           status:"ONGOING"
        },
        {
           title:"A Lonely Dungeon",
           author:"cathfach",
           description:"When a new dungeon is born, it wants nothing more than to have the most vicious monsters, the most cunning traps and the most shiny of loot. There is only one problem, but it's a rather big one; it finished its first floor years ago, but it still hasn't been visited by any adventurers! In order to find someone or something to explore its floors, or perhaps just to find someone to talk to, this dungeon will have to go way off script. But it soon discovers that going off script brings problems of its own, and that adventurers are not the only thing this world is missing.\nA shortish story about a dungeon's journey of exploration and self-discovery in a devastated world. Cover made (poorly) with POV-Ray.\nPrequel to An Unbound Soul\nPublished here, scribblehub and amazon. Join the discord at https://discord.gg/ZxmZWhTm4e",
           pageCount:213,
           linkUrl:"https://www.royalroad.com/fiction/37231",
           imageUrl: "https://www.royalroadcdn.com/public/covers-full/a-lonely-dungeon-aaaac9ysta4.jpg?time=1604216228",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"The Great Core's Paradox",
           author:"Zendran",
           description:"Name: Paradox\nSpecies: Snake, ?\nDescription: A tiny snake with great potential.\n\nThat was who I was. That was what I was. A tiny snake with great potential. The sole creation of the Great Core.\nIt was just us, the Great Core and I, tucked away in our little corner of the World Dungeon. Together, we hid from the bad-things and the Coreless of the world outside - safe from the horrors that would consume us.\nUntil, one day, the Coreless found us. Until they tried to steal away my creator. Until, with no other option, I swallowed the Great Core that had made me.\nOnly after that did I become what I was always meant to be.\nAt last, I became the Great Core's Paradox in more than name.\n[The Endless Cycle] began.\n\nThus begins the story of a little snake zealot and his journey to greatness.",
           pageCount:522,
           linkUrl:"https://www.royalroad.com/fiction/40888",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/40888-the-great-cores-paradox.jpg?time=1616816609",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"The House Witch",
           author:"Delemhach",
           description:"A mysterious new cook has arrived for the King of Daxaria's household. With his strange appearance and guarded personality, many members of the staff, and even some of the nobility, are curious about him. However, with the rumors of a war on the horizon, and the Queen pregnant with her second child, there isn't time to worry about an eccentric stranger. Besides, how important could he be?",
           pageCount:1050,
           linkUrl:"https://www.royalroad.com/fiction/32747",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32747-the-house-witch.jpg?time=1590356713",
           warnings: JSON.stringify({ warnings: ['Profanity','Sexual Content']}),
           status:"ONGOING"
        },
        {
           title:"Lament of the Fallen",
           author:"Vihyungrang",
           description:"What happens when the great war is over and the 'good' side has won? What happens to the last surviving members of the fallen 'evil' side of the conflict? This is the tale of one of those survivors. Will she try to seek revenge? Will she try to hide her origin and ancestry and live in peace? Or will the universe have something else in mind?",
           pageCount:2783,
           linkUrl:"https://www.royalroad.com/fiction/6752",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/6752-lament-of-the-fallen.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content']}),
           status:"COMPLETED"
        },
        {
           title:"Post Human",
           author:"J P Koenig",
           description:"What do you do when you find yourself the sole survivor of the complete destruction of Earth?  Nikola winds up in that position, disembodied in a half-built asteroid outpost, the last remnant and only hope of the human race.  Nikola exists now only in digital form, controlling drones and cameras to interact with the world.  But Nikola's memories are fractured, and there are endless obstacles between awakening as a glorified computer program and saving the species.  Is Nikola even human anymore?  Is it even possible to resurrect humanity?",
           pageCount:328,
           linkUrl:"https://www.royalroad.com/fiction/22848",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/22848-post-human.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"A Journey in Darkness",
           author:"Mr. White",
           description:"A Journey in Darkness is the story of a human girl who finds herself displaced far, far away from home, in a new world filled with wonders to discover and perils to overcome in her very own way.\nWaking up in a cave in her pajamas will only be the start of her problems.\nWill she find a way out? Maybe. Will she get eaten while searching for it? Probably.\nIs she going to be quite unhappy with the menu offered? Absolutely.\n \n\nHello! I'm Mr. White and this is my first story. I hope you will like it!\nIn this tale you won't find a powerful main character conquering the new evil world with only the power of his tortured soul. What you will find is a normal person growing and finding her way despite the hardships she encounters in a world that is not so black and white.\nI will be posting every Tuesday and Friday and I'll try to keep as large a backlog as possible.\nEnglish is not my first language so I hope you will inform me if you find any mistake in the chapters.\nDiscord\n\nRoyal Road Writathon challenge Winner!\n\nPhoto by Alexander Jawfox on Unsplash",
           pageCount:679,
           linkUrl:"https://www.royalroad.com/fiction/41591",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/a-journey-in-darkness-aaaapd4jbg8.jpg?time=1616689146",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Rebirth in a Magical World",
           author:"Flying JMW",
           description:"What would you do if you were reborn inside the Harry Potter Universe. Follow Alexander Fawley's adventures as he is reborn in the Harry Potter world. In this tale, he will have new unique adventure to call his own, And he will discover that the Harry Potter Universe is much greater than he had imagined. P.S This is my first story, so please leave reviews, to let me know how I am doing, so I can get better. Also J.K. Rowling owns Harry Potter, I simply play in her world.\nOn a side note, I am curently re-editing the first half of the story. So, you might see grammer mistakes. I am working on fixing the problems, if you can push through to the chapter thirty-five ish the grammer improves alot becuase White Wind has been editing my mistakes.",
           pageCount:1147,
           linkUrl:"https://www.royalroad.com/fiction/26581",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/26581-rebirth-in-a-magical-world.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Desolada",
           author:"lkal92",
           description:"For millennia the demon lords known as the Goetia enslaved the human race, until a group of mortals known as the Archons received divine blessings of power and overthrew them. Under their dominion mankind flourished, though the war in the shadows never ended. A thousand years later, sixteen-year-old Leones' family is executed for the crime of heresy. Burned to death for questioning whether the Archon of Flames is a divine being, and whether any of the Archons truly are. \nAfter manifesting the power to control time, Leones survives and embarks on an uncertain journey for power and revenge. But if he is to overcome a god, he may need some help. Along the way he will discover the truth behind the demon lords, time, and reality itself, as he walks along the razor path. \nArtwork is used with permission from the creator, @chinfongart.\nUpdated on Tuesdays and Saturdays",
           pageCount:426,
           linkUrl:"https://www.royalroad.com/fiction/41670",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/41670-desolada.jpg?time=1617034544",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"Lever Action",
           author:"RavensDagger",
           description:"Charlie Norwood, a goblin-exterminating bounty hunter working in the frontier desert, finds herself embroiled in conspiracy when she stumbles across some gnomish warmechs chasing down an elven prince.\n\nA Fantasy Western.\n\n[Participant in the Royal Road Writathon Challenge]",
           pageCount:355,
           linkUrl:"https://www.royalroad.com/fiction/41423",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/lever-action-aaba15xuzg8.jpg?time=1616205580",
           warnings: JSON.stringify({ warnings: ['Gore']}),
           status:"ONGOING"
        },
        {
           title:"Forge of Destiny",
           author:"Yrsillar",
           description:"In the Celestial Empire, a land ruled by Immortals and stalked by Spirits and Beasts, a young girl from the slums of an unimportant city is found to have the Talent. In the great Sect of Argent Peak, she will take her first unsteady steps upon the way.\nCan she learn to not only survive, but thrive on her journey?\nUpdates Mondays, Thursdays and Saturdays. The first two Volumes can now be found on Audible\nCover Art by Melody Cheng\nOriginal, unedited Quest found here\nTales of Destiny, an anthology of short stories in the same setting",
           pageCount:3369,
           linkUrl:"https://www.royalroad.com/fiction/21188",
           imageUrl: "https://www.royalroadcdn.com/public/covers-full/21188-forge-of-destiny.jpg?time=1625781267",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Valkyrie's Shadow",
           author:"Aeridinae Lunaris",
           description:"In the wake of the Battle of Katze Plains, the banner of Ainz Ooal Gown flies proudly over the city of E-Rantel. The Sorcerous Kingdom has entered the world's stage to the clamour of death and devastation; the surrounding nations fearfully prepare even as they reel from its calamitous debut. Within the borders of the newly annexed realm, its Human subjects cower in their homes as the Undead openly walk the streets and stalk the lands. Yet, when a destitute noble finds herself under the auspices of an unlikely benefactor, events are set into motion that will resound over the world for ages to come.\n\nA kingdom builder based on the events and setting of Kugane Maruyama's Overlord. In a fantasy world where beings of matchless power are transmigrated from the arbitrary existence of a game, Valkyrie's Shadow chronicles the lives of the natives whose reality has been turned upside down by their advent. It is the tale of a nation created by the whims of a supreme sovereign, and his unstoppable servants who each have their own, often twisted, interpretations of their Master's Will. \n\nThere is no victory in strength; no miracles wrought from magic that will save them: only the inexorable advance of a new world order where those who secure a place of service within will find themselves turned against the world that they once knew.\n\n[Slow buildup. Methodical storytelling with a focus on well-rounded kingdom building and character development.]",
           pageCount:3067,
           linkUrl:"https://www.royalroad.com/fiction/39336",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/39336-valkyries-shadow.jpg?time=1610657459",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"Somebody Stop Her",
           author:"Vitaly S Alexius",
           description:"In a world of villains and heroes, the Kilborne family moved to the small town of Saint Mary. Their new neighbors, living in the 1888 Saint Mary cathedral, turned out to be a family of supervillains. Martin Kilborne would find school perfectly mundane if it wasn't for Alexa Terranova who is: constantly bothering him with a pocket raygun, demanding he become her minion and threatening to blow up the principal's office in a series of unnecessarily complicated, wacky plots. \nThe more Martin learns about Alexa, the more dangerous and insane his life becomes as he is dragged into terrible, misfortunate, no good adventures of doom.\nA wholesome, slice of life, superhero / supervillain sci-fi comedy, sprinkled with elements of horror.Participant in the Royal Road Writathon challenge - 55'555 words in 35 days!Dedicated to my daugher who has an unbendable stubborn spirit and my friends at the Silver Pen server who motivated me to write new things!",
           pageCount:340,
           linkUrl:"https://www.royalroad.com/fiction/41805",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/41805-somebody-stop-her.jpg?time=1617933450",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Arrogant Young Master Template A Variation 4",
           author:"LivingSpoon",
           description:"What would a Xianxia MC do?Seriously, what would they do? Asking for a friend.",
           pageCount:775,
           linkUrl:"https://www.royalroad.com/fiction/28601",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/28601-arrogant-young-master-template-a-variation-4.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Misadventures of a Rampaging Demon",
           author:"Spectacular",
           description:"In a remote magical laboratory, buried deep beneath the earth, an unspeakable demonic horror is brought into the world...\nHer name is Lilizath VekxZ'Kraugh (Lily for short). She enjoys cuddling, stargazing, and devouring the torn apart bodies of her enemies. The demon girl rampages across a fantasy world, satisfying her demonic urges while making friends with various terrified humans.\nMeanwhile, an honest young lady leaves her peaceful life behind to embrace her destiny as the chosen one. Things go horribly wrong almost immediately and a random act of violence spares her from a very unpleasant evening.\nMature Content Warning: Contains gratuitous scenes of sex, violence, and violent sex. This story is not appropriate for younger readers, older readers, or anyone else, for that matter.\nAuthor's Note: This is my first attempt at publishing something I've written online. I'd love some feedback. Feel free to comment and let me know what you think of it and offer suggestions or criticisms.",
           pageCount:471,
           linkUrl:"https://www.royalroad.com/fiction/25299",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/25299-misadventures-of-a-rampaging-demon.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"This Used to be About Dungeons",
           author:"Alexander Wales",
           description:"This Used to be About Dungeons is a comfy slice-of-life adventuring story that occasionally features dungeons. Updates Wednesdays and sometimes Saturdays.\nMostly it's about walking in the woods with a friend, looking for mushrooms to put in your soup, or haggling with the guy selling squash, or taking care of a neglected garden. It's putting some jam on shortbread biscuits. And yes, sometimes you go down into the dungeons with your friends, and you kill monsters there, or disarm traps, but when you come out, you realize you've found the perfect magic item to give to one of the local kids that helped you out when your cat was sick. Look, the dungeons are always going to be there, and sometimes you need to make a journey to one of the Spirit Gates, or make a pilgrimage with the local Cleric of Symmetry to a holy shrine. Your tour through the local dungeons can wait. You'll have rivalries with other groups, and find some dungeon eggs that need to be carefully incubated in case they turn out to be something valuable, and help a friend to build a fishing weir. There's a big world out there, a mostly tame place with lots of magic, and even more to do and see. Join me, won't you?The cover image is Morning Sunlight Effect, Eragny, by Camille Pissarro.",
           pageCount:119,
           linkUrl:"https://www.royalroad.com/fiction/45534",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/this-used-to-be-about-dungeons-49343.jpg?time=1628210433",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Undead",
           author:"NineKeys",
           description:"A man has been brought back to life for a fell purpose. He inhabits the body of a ghoul: a lesser undead being. He must kill and eat, both to accrue power for himself and to serve the purposes of the mysterious woman who summoned him.\nWARNING: This novel is not suitable for underage or otherwise susceptible readers. Take the tags seriously.",
           pageCount:439,
           linkUrl:"https://www.royalroad.com/fiction/30673",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/30673-undead.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"Pith",
           author:"madwhitesnake",
           description:"All humans possess a Pith, the essence of a mind where consciousness, reason, and emotion reside. Those who study its power can control their surroundings, move from body to body, and alter the very fabric of another's thoughts.\nOn the continents of the Eight Oceans, the magicians wielding this energy formed secret societies, ruling nations from the shadows.  Ten years ago, the public exposed them, plunging the world into chaos.\nIn the industrial empire of the Principality, Anabelle Gage has dreamt about Paragon Academy for as long as she can remember.  An exclusive magic school, that can hone her abilities and cure her terminal illness.\nAnd then they reject her.\nShe has one shot at saving her life: Enter the city's cutthroat underworld, and make enough money to buy a new body.  By any means necessary.\nAna forms a band of desperate exiles: A banished noble with dimension-warping power, a mind-reading mercenary, and a twenty-year-old bombmaker in an eighty-year-old body.\nTogether, they will uncover the secrets of this world.  The true face of Paragon Academy.  The drowned ruins of an ancient utopia.  And the ocean, slowly rising, swallowing the planet beneath the waves.\n\nVote for Pith on TopWebFiction\nDiscord Link: https://discord.gg/4WcFQN7\nJoin Pith's Patreon to read one chapter ahead\n\nUpdates once a week on Monday nights.  You can also read it at the main site here.\nWarning: This story contains mature, potentially traumatizing content.  Violence, mind control, genocide, bigotry, body horror, self-harm, suicide, addiction, existential horror, and more.  Read at your own risk.\nNote: As a heads up, this story also includes LGBT content.\nCover art by Tithi Luadthong",
           pageCount:2147,
           linkUrl:"https://www.royalroad.com/fiction/40150",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/pith-aabaiovslw8.jpg?time=1612514156",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"A Sinner's Eden",
           author:"Andur",
           description:"The Earth of the future is united under a single government, but not all things are well. The shape of the playing field may be changed, but the powerful still rule the weak.And those who do not conform with the rest of society are exiled to another world. A world that not even the technology of the future managed to tame.It should have been humanity's New World but ended up as nothing more than a penal colony. A place where the exiled are sent to die.\nMotivated by revenge, Magnus sets out on a quest to bring his own justice to his enemies. For that purpose, he is willing to go further than most others.But then he learns that if he truly wishes to change things, he can only find his answers beyond the gate.\nHaving lived most of her life as an exile, Astra is a woman of few interests aside from survival and climbing the ranks of her clan.To achieve those goals, she certainly won't be squeamish when a chance to achieve those goals literally falls into her lap, or will she?\n-------------------------------\nI am trying to go with a survival/medieval setting in this one. People from a technologically advanced society are thrown into a world where they can't maintain their tech. They are forced to rely on medieval technology where they have to make do with the limited resources they have and what little of their old technology is still working. Their gene manipulation allows them to have something akin to superpowers, but that doesn't help much against the monsters of their new world. Not sure yet whether sufficiently advanced technology will be discovered later on to count as magic.\n-------------------------------\nAuthor's Comment:\nI was asked about reading my work on other sites. The answer is simple: Currently, I am not active in any other networks than royalroadl.com. Only here, I correct mistakes and errors. If you read it anywhere else and have to pay for it or have to deal with an annoying amount of advertisement, You Are Being Betrayed. You would do good if you make other people in that network aware of it. This is a free project of mine for the purpose of having fun. And if people try to make money with it you shouldn't bother visiting their website. The only one whom I actually allowed to have my work on his website is Armaell who invested the time to compile them into pdf. (http://armaell-library.net/author/andur)",
           pageCount:228,
           linkUrl:"https://www.royalroad.com/fiction/45384",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/a-sinners-eden-aadagl2tera.jpg?time=1627664099",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Salvos (A Monster Evolution LitRPG)",
           author:"MelasD",
           description:"The Netherworld: it is a hellish landscape inhabited only by demons, creatures born from the dark abyss. It is also the only world Salvos knows.\nJoining the ranks of newborn demons, Salvos is thrown into the violent, anarchy-ruled landscape of that world. To survive, she will have to learn, she will have to adapt, and she will have to evolve. She will gain experience to reach new Levels of power. \nHer curiosity aids her but her pride could be her fall. It is the nature of the Netherworld to avoid or conquer any threats faced. After all, the law of evolution is survival of the fittest, and Salvos is a survivor. And perhaps, eventually, she will leave this world behind for a better place. But is that what she even wants? \nDo note that it's a slow-paced but action-packed litrpg!\nJoin my subreddit! \nBoost me on TopWebFiction!\nSalvos Vol. 1 is now available as an eBook in these stores!\nSalvos Vol. 1 is also available as an Audiobook on Audible!\nClick here to read up to 20 chapters ahead on my patreon!\nClick here to join my Discord\nCopyright 2020 MelasD\nPMs are for business purposes only. Do not PM me with unsolicited criticisms.",
           pageCount:1766,
           linkUrl:"https://www.royalroad.com/fiction/37438",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/37438-salvos-a-monster-evolution-litrpg.jpg?time=1629766041",
           warnings: JSON.stringify({ warnings: ['Gore','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"First Contact",
           author:"Ralts Bloodthorne",
           description:"Eight Thousand Years after the Glassing of Earth, Terran Descent Humanity has largely become a post-scarcity society based on consent and enjoying life. With the discovery of another ancient race beyond the \"Great Gulf\", events and history collide to draw the Terran Confederacy into war against an hundred million year old empire that has always won and believes it always will. With allies and enemies of multiple species, the Orion Galactic Arm Spur will be wracked by warfare the likes of which have not been seen. Cracked, harried, wounded, and damaged, Terran Descent Humanity willfully throws itself against the universe itself.\n\"The universe hates you and will take away everything you love, laughing while it does so.\" - Terran belief.\nA wiki is available (although under construction) at: https://fcgestalt.fandom.com/wiki/First_Contact_Gestalt_Archive_Wiki\nTold largely from the viewpoint of other species, the story is currently ongoing. It involves graphic depictions of violence, war, adult language and situations, drug use, and other mature topics.\nThe story will be updated on weekdays, so keep an eye on this page for more chapters.\nThe story is 400+ chapters, and repeating characters do not start appearing until the Vuxten chapters. If you're in a hurry for repeating characters then this story will not be enjoyable to you. The interwoven plot is not based on a single person but the entire war, with its effects upon multiple people.\n[participant in the Royal Road Writathon challenge]",
           pageCount:6574,
           linkUrl:"https://www.royalroad.com/fiction/33726",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/33726-first-contact.jpg?time=1593561512",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"The Ogre's Pendant & The Rat in the Pit (Completed)",
           author:"Traitorman",
           description:"The land is conquered.\n \nA thief and a demon killer run afoul of its new overlord and the wizard that serves him. Now the wizard seeks his life's ambition, an artifact that will make his word law. Hearing this, the demon killer and thief begin to have ambitions of their own. The race is on for who will reach the artifact first, and an entire barbarian horde is in the running.\n \nYet the prize lies within the Forest of Giants, grown from the corpse of an empire. \n \nThere are tales of things that stalk the trees. Tales of those that hunger endlessly. Tales of those that feast on human flesh.\n \nTales of ogres.\n \nA Sword and Sorcery story of high adventure.\n \n Complete.All stories and characters - including The Ogre's Pendant and The Rat in the Pit - written by Traitorman are created by and are the intellectual property of J.M. Clarke",
           pageCount:534,
           linkUrl:"https://www.royalroad.com/fiction/31194",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/31194-the-ogres-pendant-the-rat-in-the-pit.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content']}),
           status:"COMPLETED"
        },
        {
           title:"A Dream of Wings and Flame",
           author:"Cocop (Cale Plamann)",
           description:"Kobolds cower at the bottom of the foodchain, forced to eke out a meager existence in the most wretched of caves.\nMost have made peace with their lot in life; one of eating scraps and carrion. They hide and run from predators, delaying the inevitable day when they aren't fast or sneaky enough to make their escape.\nBut not Samazzar.  Sam is different from other Kobold pups.  Traps and caves might keep him and his people alive, but sometimes, just living isn't enough.  The blood of dragons pumps through his veins, and Sam isn't willing to settle for mere survival.  Whether by claw, magic, or cunning, one day he will soar above the plains, predator rather than prey. And nothing, be it the mockery of his tribe, the hazards of the deep caves, or even the almost insurmountable difficulty of successfully evolving his bloodline, nothing is going to stop him.\nJoin Samazzar and his boundless optimism on his quest to throw off the shackles placed on his tiny scaled body by fate so that he can claim his birthright once and for all. \n- - - - -\nKobold design by Faewild\nColoring/Everything Else on the cover KrazeKode",
           pageCount:170,
           linkUrl:"https://www.royalroad.com/fiction/42630",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/a-dream-of-wings-and-flame-aacaz3tulw8.jpg?time=1619460333",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"A Beginner's Guide to Napping, Sunbathing, and Slaughtering Your Prey",
           author:"TigerCannon",
           description:"Fang is a simple cat. \nFang likes napping in the sun. \nFang does not like being called Chairman Meow. \nFang likes his belly being scratched for precisely 17.329 seconds. \nFang does not like being punted between dimensions. \nFang likes hunting and killing defenseless wildlife. \nFang does not like mysterious blue boxes that appear out of thin air. \n \nFang is having a Very Bad Day.\n \n\n \nA few things to note:\nFang is a cat soul in a cat body, and that's not going to change any time soon. No cat girl evolution or possessed puppet or any of that. \nThe slice of life tag is there for a reason. There is no epic tale here, only a cat doing cat things in a (hopefully) interesting setting. \nThe game elements are pretty light, mostly there for flavor, so don't expect a huge amount of crunch.\nNature is cruel, and cats are crueler than most.",
           pageCount:181,
           linkUrl:"https://www.royalroad.com/fiction/26127",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/26127-a-beginners-guide-to-napping-sunbathing-and-slaughtering.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Lonely Light (Complete)",
           author:"unice5656",
           description:"Arael is an otherworldly being from the upper plane, a place similar to Heaven, full of Light. He now dwells on Earth, touched by Darkness, unable to return. When he rescues Sariel, an innocent angel from the clutches of Dark mages, he is no longer alone for the first time in centuries, but knows that he must return her home before she is also stranded on Earth.\nThe question is, does she wish to go?\n(Pure fantasy romance)\n \n \n- Cover art credit goes to Cassandra DenHartog (www.cassandradenhartog.com)",
           pageCount:48,
           linkUrl:"https://www.royalroad.com/fiction/3569",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/3569-lonely-light-complete.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"Sylver Seeker",
           author:"KingKennit",
           description:"After fulfilling the duty all arch necromancers are tasked with, Sylver Sezari was not expecting to ever wake up again.\nBut he did.\nAnd after crawling his way back into the land of the living, he's alive once again. In a strange land, a strange time, and with a strange floating screen in front of his new face.\nEither through plan or chance, he's alive again, and planning to enjoy himself to his heart's content.\n-The story isn't grimdark, but it's not all sunshine and rainbows either. There will be lighthearted and positive moments, as well as some sad ones. That being said, it's a whole lot more light than dark. -This is a LITRPG story.\nChapters are published every 2 days at 21:00 GMT.\nAuthor's note:-It can get very GORY. I'm somewhat desensitized to gore and violence. So while the story isn't full of gore for the sake of gore, it can get a little too descriptive.-The MC is a necromancer, so corpses and decay, and all the things that come with it, will be mentioned from time to time.-I'm a huge fan of Egyptian, Slavic, and Greek mythology, so expect quite a bit of that. That said, so much is altered, you'll be hard-pressed to guess how exactly it is being used.-Despite being 'immortal' the MC can die. In the event he does, the story doesn't end, simply time skips forward. Which in some cases is going to be worse than just dying.-I love plot twists, as much as I love red herrings and Chekhov guns. Deus Ex Machina's not so much.\nCover: https://angshumandhar.artstation.com/projects",
           pageCount:1911,
           linkUrl:"https://www.royalroad.com/fiction/36065",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/36065-sylver-seeker.jpg?time=1604603353",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"The Gilded Hero",
           author:"wercwercwerc",
           description:"To be summoned to another world, arriving in plane of existence filled with magic and potential! Already, you've been given the great privilege of becoming a [Hero] and the honored task of defeating the demon king! Some people might call that the opportunity of a lifetime!\nWith the chance to learn to become a master of the sword, to grow more powerful than anyone on Earth could ever dream, what's not to love about being a hero? It's just like the King said: this is destiny calling! This is what you were born to become!\nOr... not.\nIt turns out, people summoned from another world are easily charmed with the title of \"Hero.\"\nAnd they really shouldn't be.\n\nBook One - Completed on 7/15/2020\nBook Two - Under Construction",
           pageCount:436,
           linkUrl:"https://www.royalroad.com/fiction/29286",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/29286-the-gilded-hero.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"HIATUS"
        },
        {
           title:"Paladin",
           author:"Komikhan",
           description:"When the first derelict alien spacecraft fell to Earth, humanity took what was found in it and propelled themselves to new heights. In their new Golden Age, humanity developed technology that they had only dreamed about. The following years saw hundreds more ships crash into the planet, spurring even greater technological leaps.\nAn unassuming spacecraft, one of the dozens that fell yearly, descended on Siberia in 2021. The world took no particular notice of it. However, this one contained something beyond the miraculous technology that had made humans so prosperous.\nThree years later, in a top-secret underground facility in eastern Colorado, the automated construction of an army of Paladin Mobile Infantry Suits was underway. With this new, state-of-the-art weaponry, the military would turn the tide against the alien incursion that was consuming the planet. Humanity fell before that could happen. Sam was an engineer responsible for overseeing the facility. Now alone, he lives in utter boredom and near insanity, his only company the base's pseudo AI and an army of empty Paladins. With the world gone to hell around him, and the things that caused it still living above, he decides that he is much better off staying exactly where he is. Unfortunately for him, that is no longer an option.\n\nThis is the first novel I've written. The first fifteen or so chapters are going to be a little slower. I want there to be time to get to know the characters before they start blowing stuff up. Also, though the MC will be strong relative to the world, he won't be OP, and won't win every fight. Not every fight will be physical either.\nCurrently, I'm aiming for something like 5 fairly short chapters a week, after the introduction part is done, but we'll see how that goes. Thanks for reading, and please let me know if I've made mistakes!",
           pageCount:766,
           linkUrl:"https://www.royalroad.com/fiction/13468",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/13468-paladin.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"HIATUS"
        },
        {
           title:"Heart of Dorkness",
           author:"RavensDagger",
           description:"When an accident causes the early death of two young women, one is chosen to become a hero, a saviour, and a servant of the God of Heroes! \nThis is not her story. This is the story of Valeria, whose soul clung to her friend's, and who was dragged into a new world where her wandering spirit was claimed by the Goddess of Darkness.\nAnd so, one who doesn't belong grows to become the servant of the Dark Goddess, a servant-definitely not a daughter-who will usher in a new age of despair and disgust. \nThe only problem is, she's really bad at the whole \"evil\" thing, not that she's unwilling to do her best to please her adoptive mom, the Dark Goddess Luciana.",
           pageCount:257,
           linkUrl:"https://www.royalroad.com/fiction/44541",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/heart-of-dorkness-aacaqvew6w8.jpg?time=1625081183",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Peculiar Soul",
           author:"TMarkos",
           description:"Not everyone gets a soul.  The rise of industry and mechanization has sent the world's population booming upward, striving relentlessly for the fixed handful of souls that level armies and steer the fate of nations.  The remnants of a crumbled empire fight in a grinding, bloody war against their ancient enemy.\nNot everyone gets a soul, but Michael must - for he is the scion of a lord, and the soulless cannot hold such a title.  For five years he has tried to tempt one of the souls freed by its vessel's death.  Five years of pain and failure, earning only his father's contempt.  At last, one more opportunity to earn his soul has come.\nBut not everyone gets a soul quite like his.\n\nUpdates weekly on Wednesdays.\nCover art by Harry Rowland.",
           pageCount:315,
           linkUrl:"https://www.royalroad.com/fiction/42433",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/peculiar-soul-aadawkpwjw8.jpg?time=1618930752",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"The Courting of Life and Death",
           author:"VMJaskiernia",
           description:"Buy the books, or cross-post your RR review - BOOK 2 OUT NOW! \nClandestina is a realm of secrets, fairies, and dark magics. Among the nobles there is talk of a goddess of death, and a forbidden magic she grants to those that follow her-- cræft that can heal injuries that should be fatal or even bring back the dead. But she asks for much in return; blood and sometimes even life itself.\nLarkspur, or A Necromancer's Romance: Pierre Salvador has just returned to court after finishing his studies and becoming a surgeon. But as he flirts with his childhood friend Elizabeth Anne, Mora, The Lady of Death, waits for him.Delphinium, or A Necromancer's Home: Lady Elizabeth Anne does not know about the dark magic her beloved practices, and he has no intent to tell her. As they travel to his childhood home for the summer, Pierre Salvador attempts to balance his newfound love with his murderous cræft and his duties as duc.\nAconitella, or A Necromancer's Wife: Coming Soon",
           pageCount:519,
           linkUrl:"https://www.royalroad.com/fiction/32947",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32947-the-courting-of-life-and-death.jpg?time=1623470600",
           warnings: JSON.stringify({ warnings: ['Gore','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"Fluff",
           author:"RavensDagger",
           description:"Every year, on the same day, people across the world awaken new powers. They take the first step on the path to becoming Super Heroes... or Villains.\nEmily Wright wants nothing to do with any of that. All she wants is to get her degree and maybe learn to deal with her anxiety so that she can have an entire conversation with a stranger without panicking.\nShe did not plan to awaken with the power to summon little sisters, or to learn that she's been marked as a Villain. Will she be able to turn things around, or will she drown in a sea of super villainy and cuddles?",
           pageCount:356,
           linkUrl:"https://www.royalroad.com/fiction/35958",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/fluff-aabarwezdw4.jpg?time=1600157863",
           warnings: JSON.stringify({ warnings: []}),
           status:"COMPLETED"
        },
        {
           title:"Magic-Smithing ",
           author:"kosnik4",
           description:"Full disclosure, the cover image isn't mine. Check out the full image here.\nI put all the warning tags to give myself creative freedom, but I'm not going to write a story filled with gore or swearing.\nThis is my first time writing, other than for school projects. I put the gender-bender tag because I wanted to try writing from a female's perspective, and needed an excuse for why my MC reads a little tomboyish. The gender-bender fades into the background over the first few chapters, please don't let the tag keep you away from trying out my story.\nSynopsis:\nSecond chances are rarely earned, and even rarer given. Follow a new life in a new world, where anything is possible. Our MC wakes up, stuck as a baby, needing to decide how she will live her new life. Let's see what future she can forge for herself, when hard work is rewarded with status points and skill levels.",
           pageCount:1422,
           linkUrl:"https://www.royalroad.com/fiction/31474",
           imageUrl:"/images/royal.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"The Zombie Knight Saga",
           author:"George M. Frost",
           description:"Death is coming. And he wants to help.\nThe world of Eleg may seem like a normal enough place at first blush, but wade deeper into it, and soon the dark, the deadly, and the mad will begin to reveal themselves.\nBut don't worry.\nThey usually have a sense of humor.\n\n((Ebook versions of the first four Volumes [138 chapters] are available on Amazon.))",
           pageCount:4042,
           linkUrl:"https://www.royalroad.com/fiction/28307",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/28307-the-zombie-knight-saga.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"Fantasia",
           author:"unice5656",
           description:"Arwyn has just bought Fantasia, the first fantasy-based VRMMORPG, with 99% realism that you can play while you sleep. In the game, she becomes Fey, a moon elf starting in the magical Elvenwood. Join her (and her snarky narrator who likes to interject sarcastic comments in parentheses) on her exciting, often hilarious adventures inside this magical world full of every fantasy creature you've ever encountered in books, games, and movies, and a few that you haven't.\nOh, and there's something strange about the NPCs in this game... See if you can figure it out before Fey does. (No, they are not self-aware AIs.)\n-Cover art credit goes to A. Noviant",
           pageCount:937,
           linkUrl:"https://www.royalroad.com/fiction/98",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/98-fantasia.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Vaudevillain",
           author:"tetran",
           description:"Dylan is your average nerd. He works downtown for an architecture firm during the day and enjoys all manner of games and media in his spare time. But while Dylan likes all forms of sci-fi and fantasy, he really likes the genre of superheroes.\nSo when an indie company releases a virtual reality MMO where players choose to play as heroes or villains, Dylan immediately buys into it. He has a specific type of character he really enjoys watching, something that always makes his inner child laugh in delight. The Saturday morning cartoon villain.\nYes, those inept, bungling, yet highly dangerous villains found in so many of Dylan's cartoons as a child. He loves how they always come up with strange ways to conquer the world and how they get thwarted every weekend. He remembered laughing at every silly antic, every cliched shout of \"Curses! Foiled again!\" He loves it so much he decides to take this idea into the MMO.\nBut to grab a playerbase, the company has announced a promotion that players with a high enough reputation can get contacted to become permanent raid bosses in the game. Those chosen will be paid as if employees of the company. Serious players all hoping to live the dream of playing videogames all day rush to purchase copies of World of Supers!\nWhat will happen when Dylan, someone playing the game for fun, clashes with these overly serious players?",
           pageCount:1786,
           linkUrl:"https://www.royalroad.com/fiction/32983",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32983-vaudevillain.jpg?time=1597070726",
           warnings: JSON.stringify({ warnings: ['Profanity']}),
           status:"ONGOING"
        },
        {
           title:"Villager Three",
           author:"Kruos",
           description:"[Full realm assimilation will be completed in a few million years give or take and then the Gates will stop appearing, use them while you can. The next War of the Gods is scheduled to start in about 15 billion years, practice hard until then.][See ya around!]With that simple farewell, the world changed forever.\nKira Hawthorne was just another teenage girl until the day a 'god' told the world their 'realm' was getting assimilated since they lost some War no one on Earth even knew about.\nA System is installed on the whim of a very old and capricious god, and one teenage girl embarks on a journey in a once familiar world turned foreign... And very hostile.",
           pageCount:425,
           linkUrl:"https://www.royalroad.com/fiction/32576",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32576-villager-three.jpg?time=1597209129",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Brimstone Fantasy",
           author:"stern trooper",
           description:"Given his first weapon when he was still a child, Edward Lee lived a life full of violence in a nation torn by war.\nTormented by the demons of his past, he believed Death would free him.\nBut through the games of beings beyond his understanding, his death turned out to be the starting point of a new life in a strange world of magic and monsters, as a young teenager.\nBeyond simply finding a way to survive the dangers of his new life, Edward will soon realize that there is still a price to pay for his past actions.\n \n \nCover art isn't mine.",
           pageCount:678,
           linkUrl:"https://www.royalroad.com/fiction/16545",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/16545-brimstone-fantasy.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"HIATUS"
        },
        {
           title:"The Menocht Loop",
           author:"caerulex",
           description:"Ian Dunai thought he was powerless.\nHe's not alone: only a small percent of the population have high enough affinities to perform magic. But in the eyes of his father's gifted family, Ian's impotence is a disgrace-and the stain of his mother's common blood.\nBut on one fateful day, Ian awakens not in his college dorm but in the middle of the ocean on an old dinghy. Reaching land is the least of his problems as he encounters risen skeletons, tortured captives, and a shoreside city in the throes of contagion.\nIan doesn't last very long without magic. But death isn't the end: Ian wakes back up on the dinghy and relives the day again...and again...and again.\nAs Ian investigates the purpose of the loop and a way to escape, he begins to realize that he might be more powerful than anyone-especially himself-ever imagined.\n\nRelease schedule: Tues/Thurs/Sat releases (3 chapters/week) at 11:30 am EST. Note: temporarily reduced to 2 chapters/week through July 2021 (temporary release dates are Mon/Fri).\nBook 1, The Menocht Loop, is complete at ~100k words (~370 pages; chapters 1-41).\nBook 2, The False Ascendant, is complete at ~110k words (chapters 42-83)\nBook 3, The Eldemari's Wrath, is complete at ~145k words (chapters 84-143)\nBook 4, The Samsara Crucible, is ongoing (chapters 144 and on).\nConstructive criticism welcome.\n\nJoin the discord.\nVote on Top Web Fiction!\nView the wiki.\nCover art by the very talented Jeff Brown. (Higher res version here; 3840 x 2400 ultra high res wallpaper version here)",
           pageCount:1702,
           linkUrl:"https://www.royalroad.com/fiction/31514",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/31514-the-menocht-loop.jpg?time=1626579572",
           warnings: JSON.stringify({ warnings: []}),
           status:"ONGOING"
        },
        {
           title:"Digital Marine",
           author:"Duck_No_Duck",
           description:"The class divide still exists in the future, and it has gotten much worse. There are many different types of worlds, from the paradise worlds where everyone is immortal, to the resource depleted, war-torn planets where every day is a struggle just to live.\nFreya O'Malley grew up on Earth, the worst of the war-torn planets, and wants nothing more than to leave. With few options, Freya joins the Federation Marines. But, unlike the past, it's a struggle to earn enough enlistment points to stay in. With the prize of a citizenship on a paradise world at stake, competition is fierce. Every week is a new war. Can Freya earn enough points in the constant warring of the Marines to modify her body and mind to stay competitive? Can a girl from the wrong planet make it against those who have all the advantages?\nPosting every Monday. Chapters will be roughly 4k or more words. \nEdited by Aldous starting at chapter 19.\nIf you like this story think about checking out my other web novel Super Soldier not Super Hero.\nPlease come and enjoy the discussion at Discord\n If you have any extra cash laying around and you feel like supporting the story you can donate here at Pateron or PayPal.  Patreon donators have options to read unedited chapters before anyone else can read them if you can't wait for the next chapter.",
           pageCount:1675,
           linkUrl:"https://www.royalroad.com/fiction/24396",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/24396-digital-marine.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"The Houndsman [Base-Building LitRPG]",
           author:"Houndmaster",
           description:"The fae are sick of humankind violating their treaties. Their Wyld armies are taking to the field, and the world is at war.\nAfter serving two terms in the Iron Army's Building Division, Flint Woodson is done with it all. He wants nothing more than to find a remote settlement, work as a guard or a builder, and find a wife. Flint doesn't care about filling his remaining nodes with skill stones or wasting his life looking for a class. Wyldbloods like him aren't destined for greatness.\nFlint's plans go out the window when the Universe sends him a Life Quest.\nReawaken the Sleeping Fort.Protect the village of Lea's Slumber.Give the Champion of Equilibrium time to grow.\nSaying no wasn't an option when the quest involved the word 'Champion'.\n-----------------------------------------------------------\nThe LitRPG elements will differ from what you're used to.Since I'm not a fan of stats, I've devised a node system to go with the story.There will be some action in the tale, but the primary focus is base-building and raising dogs.\nThis story is also participating in the [RR Writathon] and has 2500 words at the start of it.\n----------\nThe cover typography is by DragonOfRochesterCheck out her story and hit her up for typography work!",
           pageCount:620,
           linkUrl:"https://www.royalroad.com/fiction/41732",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/41732-the-houndsman-base-building-litrpg.jpg?time=1628717173",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content']}),
           status:"ONGOING"
        },
        {
           title:"Ben's Damn Adventure: The Prince Has No Pants",
           author:"saltywaters",
           description:"A comedy.\nAll life on Earth has been stolen away by The System, transported to another world at the behest of a distant galactic empire, who lived in terror of humanity's potential.\nBen was a normal, slightly above average man, and had been about to go on the first real vacation of his adult life. Now he must contend with danger and mystery in a world of monsters, magic and treasure, armed with nothing but his wits, and the special item given to him by The System.\nThis is his adventure.\nWelcome to The World.",
           pageCount:1072,
           linkUrl:"https://www.royalroad.com/fiction/32411",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/32411-bens-damn-adventure-the-prince-has-no-pants.jpg?time=1593735193",
           warnings: JSON.stringify({ warnings: ['Profanity']}),
           status:"HIATUS"
        },
        {
           title:"Knight and Smith",
           author:"FirstKnight",
           description:"Secrets once thought lost are coming to light...\nOrin, a young thief turned mercenary, is returning to his home for the first time in four years. Orin wants nothing more than to reconnect with his family and settle down in the city he loves, but fate is fickle and has another destiny in mind for the swordsman.\nNow bound to the Princess of the Realm in ways he doesn't fully understand, Orin finds himself thrust into the world of Nobility, where no one can be truly trusted and his friends are few and far between.\nTo ensure his survival, and that of the entire Kingdom, Orin must learn to harness the power of a Knight and work with the Princess Elora to protect those they both love, all while dealing with psychotic Knights, a mad King and Elora's own protectors.\nWell, if nothing else, I'm sure it will be an adventure.\n\nThis is one of the ideas I've been working on for a while and wanted to see how far I can go with it.\nThere's nothing really original here, just something fun I wanted to explore a bit more.\nChapters will be posted once a week on Friday at five pm GMT.\nThank you for reading and I hope that you enjoy Knight and Smith!",
           pageCount:1844,
           linkUrl:"https://www.royalroad.com/fiction/37155",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/37155-knight-and-smith.jpg?time=1604145006",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity']}),
           status:"ONGOING"
        },
        {
           title:"The Breath of Creation [DROPPED]",
           author:"lightningwarrior21",
           description:"General Summary:\nSometimes, the multiverse needs expanding. That's where I come in. But, unfortunately, being a deity isn't all fun and games (and is incredibly complicated), as there are always things working against you. Not even the God of the Multiverses can change that. \nAnother Summary:\nTwelve souls were chosen to expand into the void surrounding the known universe(s), and were given a grace period in which they would experience a relatively safe expansion of their domains. Once that period is up, however, they are free to interact with each other...and what lurks in the depths of the Abyss, the Void, and the Primordial Chaos. I am one of those souls. And let me tell you, this shit ain't easy. Between trying to raise mortals into an immortal army, with which I can defend my domain, dealing with my children, and trying to maintain the balance between all realms of existance, I have my work cut out for me. Sigh. Now I know why, back on Earth, gods worked in mysterious, invisible ways. There's just too much to be done. \nFormerly called RE: Deity",
           pageCount:865,
           linkUrl:"https://www.royalroad.com/fiction/9597",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/9597-the-breath-of-creation-dropped.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Evil Overlord: The Makening",
           author:"NotGodot",
           description:"If evil was easy, everybody would be doing it, and there would be more Dark Lords running around than you could shake a stick at. But the road to Utter Domination isn't easy, smooth or straight, as the boy who will one day become Gar the Pitiless will discover.",
           pageCount:218,
           linkUrl:"https://www.royalroad.com/fiction/29540",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/29540-evil-overlord-the-makening.jpg",
           warnings: JSON.stringify({ warnings: []}),
           status:"HIATUS"
        },
        {
           title:"Coeus?",
           author:"Andur",
           description:"Author's Comment: I was asked about reading my work on other sites. The answer is simple: Currently I am not active in any other networks than royalroadl.com. Only here, I correct mistakes and errors. If you read it anywhere else and have to pay for it, or have to deal with an annoying amount of advertisement, You Are Being Betrayed. You would do good if you make other people in that network aware of it. This is a free project of mine for the purpose of having fun. And if people try to make money with it you shouldn't bother visiting their website. The only one whom I actually allowed to have my work on his website is Armaell who invested the time to compile them into pdf. (http://armaell-library.net/author/andur) -------------------------------\nReading Order of the Multiverse-Books\n-------------------------------\nAbout a boy who isn't quite normal and doesn't see himself as a human being, but is taught differently as he finds out about the world's secrets. Though not everyone is happy about his existence. This is inteded to evolve into a full blown space opera with elements of magic thrown into it. -------------------------------\nThe OneShot goes FullStory. Trying to go a little more SciFi and alternate reality this time. I am not entirely sure how this fiction will turn out. And I am not sure on the tags either. They may change. Bear with it. As always, how chapters turn out is up to my mood.",
           pageCount:840,
           linkUrl:"https://www.royalroad.com/fiction/4745",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/4745-coeus.jpg",
           warnings: JSON.stringify({ warnings: ['Sexual Content']}),
           status:"COMPLETED"
        },
        {
           title:"Forgotten Conqueror",
           author:"Za1d3",
           description:"Powerless and filled with raging anger for half his life, an avenger grasps hold of what was to be his redemption only to find despair and darkness. His mind lost, his anger went on to bring about the path of carnage. He is, but an inextinguishable flame that threatens to consume everything; all in the name of retribution. Death was but a moments reprieve for his agony. His rage overflows even after the sweet release. Unable to be snuffed out by the laws of the world, he is granted life once more In a different era. All those whom his vengeance is focused on, vanished into obscurity with the passage of time. What does one who has all the power of the world at his finger-tips do, when all the reasons for that power have vanished?",
           pageCount:1569,
           linkUrl:"https://www.royalroad.com/fiction/1439",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/1439-forgotten-conqueror.jpg",
           warnings: JSON.stringify({ warnings: ['Sexual Content']}),
           status:"HIATUS"
        },
        {
           title:"Summon Imp!",
           author:"Oskatat",
           description:"Travel with a newly born demon as he grows and learns in his own world as well as in other worlds as he gets summoned again and again. Usually to die or kill for others in strange and exciting places, but it's never certain what the next one will bring. It has its perks. With each new world comes a new story with new experiences and new lessons. There is always more to see, more to learn and more to know. Maybe, someday, it will all make sense. For now he will just work hard to become stronger, to be useful and, hopefully, survive that way.\nA coming-of-age story, but different.\n\nThings start to slow down to a crawl. Colors blur into one another until my vision is completely white. All I can think is \"Shit, not this again!\"\nI hate being summoned.\n_________________________________\nupdates once a week until I get more time\nThe idea for this story began in two places. One was the ridiculously rapid pace of gaining power in many novels. Both in games and in novels, I enjoy the struggle of the beginning character, why always the rush? The other was the way many monster or non-human MCs always seem to hurry to become human (again). It always felt like a cheap way to grant the character extra powers without the difficulty of writing a non-standard thought process.\nThus I wanted to write the slow(ish) progression of a monster character gaining strength and intelligence, while remaining distinctly non-human. There are no stats, xp or systems, no reincarnated soul or completely formed being to start with - unless I want to make fun of those. While the MC 'evolves', the process takes months if not years to proceed step by little step. Sit down with me and imagine, what would it be like if...",
           pageCount:500,
           linkUrl:"https://www.royalroad.com/fiction/33295",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/33295-summon-imp.jpg?time=1595254591",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"The Primal Hunter",
           author:"Zogarth",
           description:"On just another normal Monday, the world changed. The universe had reached a threshold humanity didn't even know existed, and it was time to finally be integrated into the vast multiverse. A world where power is the only thing that one can truly rely on.\nJake, a seemingly average office worker, finds himself thrust into this new world. Into a tutorial filled with dangers and opportunities. In a world that should breed fear and concern, an environment that makes his fellow coworkers falter, Jake instead finds himself thriving.\nPerhaps... Jake was born for this kind of world, to begin with.\n \nRelease Schedule:\n5 chapters a week.\nAverage chapter length: 2500\nTags and content warnings are mainly to give me creative freedom later on. This is my first novel ever, and English isn't my native language, so go easy on me chaps. Any feedback is more than welcome, of course.",
           pageCount:2592,
           linkUrl:"https://www.royalroad.com/fiction/36049",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/the-primal-hunter-aacavmymfa4.jpg?time=1600456445",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Infinite Realm: Monsters & Legends",
           author:"Ivan Kal",
           description:"The world has ended, and those worthy of it have received the chance for a new life in a new reality.\nZach grew in power and thrived in the post-Framework world. He became a respected leader, a shining example of what it meant to be good. But as the world ended, he had only one thought: to punish the monster that had killed the world long before the Framework ended it. Yet not even with his incredible power was he able to stand against the World Ender. His arrival in the new realty, the Infinite Realm, gives him the chance to grow stronger, to find the monster again-and make it pay.\nRyun survived the chaos after the arrival of the Framework by pushing harder than anyone else. He grew in power until he became the most powerful being that had ever walked the planet; but he is hated by the world, called a monster by all others, the World Ender. As the world ends and he steps into a new one, where people stronger than him have lived for centuries, he finds himself lost and without purpose. The only thing that had mattered to him had been lost to him long ago. He truly was the monster that people considered him to be, and he now finds himself wondering if this new reality has a place for someone like him-but he had never been one for lying down and dying without a fight. One world fell to his power, and another might follow.\n\nCurrent schedule: Monday/Wednesday/Friday\nJoin the Discord: https://discord.gg/ncC5Q7H\nA polished and edited versions of volume 1 and 2 is avaliable on Amazon.\nCurrent Volume: 4\nInfinite Realm is a story that will follow two main characters at the start, with a few more joining the cast a bit later. The story will be told in two different time periods: past and present up until volume 3. Past chapters take place in the past on Earth, and take form of flashbacks that follow the two as they struggle to survive and grow their powers in the world changed by the Framework. The main story is in the present.\nThis story is a mix of LitRPG and Xianxia, and it will have Classes as well as Cultivation systems. There are two main characters, and a few others that are introduced later.\nThe MC focus will change from volume to volume, with the first being focused on Ryun, and the second on Zach (we are currently in Volume 3). Other MC will still have chapters dedicated to them, but the focus will be on the main volume MC.",
           pageCount:3883,
           linkUrl:"https://www.royalroad.com/fiction/27325",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/27325-infinite-realm-monsters-legends.jpg?time=1615595395",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"Katalepsis",
           author:"Hungry",
           description:"Nightmares and hallucinations have plagued Heather Morell all her life.\n \nDiagnosed with schizophrenia as a child after the loss of her twin - a sister who never really existed - now struggling with her mental health at university, Heather teeters on the verge of giving up on life. A chance meeting ends in a revelation: she is not crazy, her visions are all too real, and probably want to eat her soul.\nEmbroiled with a crippled, bad-tempered magician and her self-proclaimed 'bodyguard', Heather rapidly descends into a world of terrifying magic and otherworldly monsters, in an effort to stay sane, bring back the dead, and maybe, just maybe, make out with cool older girls.\n \nKatalepsis is a Ancient Greek word which means 'comprehension', or perhaps more accurately, 'insight'.Katalepsis is a serial web novel about cosmic horror and human fragility, urban fantasy and lesbian romance, set in a sleepy English university town.\nNew chapters are currently posted once a week, on Saturdays.\n\n\n\nThis is a Royal Road mirror of Katalepsis' own website, located here, currently updated at the same time with a new chapter every Saturday.",
           pageCount:3479,
           linkUrl:"https://www.royalroad.com/fiction/28023",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/28023-katalepsis.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content','Traumatising content']}),
           status:"ONGOING"
        },
        {
           title:"The Obsidian Core",
           author:"DustHurricane",
           description:"The world is a wide, wide place. And that's without taking into account the many creatures that inhabit it. When a new Dungeon Core is born deep below the surface, it faces challenge after challenge. The only question is; is it up to the challenge of living in this world?\n\nThis is my first attempt at writing a Dungeon Core story. I'll gladly take any and all advice, comments, or criticism. \n\nReleases on Tuesdays and Fridays. Mostly.",
           pageCount:256,
           linkUrl:"https://www.royalroad.com/fiction/40503",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/the-obsidian-core-aabazyampq8.jpg?time=1613408482",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Traumatising content']}),
           status:"HIATUS"
        },
        {
           title:"The Law of Averages",
           author:"mcswazey",
           description:"What young boy doesn't crave adventure? What young man doesn't wish to be a superhero?\nBut time marches on, and life grows dull with responsibility. Is it any wonder that old dreams are forgotten?\nWelcome to The Law of Averages: In which a man is dragged solidly out of his comfort zone. Be careful what you wish for, you never know when it will come true.\nThis story follows Daniel Newman as he adjusts to a strange new world. One where superpowers are for sale, where heroics are frowned upon, and where life is constantly defying Daniel's expectations. Dan always thought that he was destined to be normal, but one world's normal is another world's special.\n \nThe Law of Averages now has a Patreon page!",
           pageCount:1385,
           linkUrl:"https://www.royalroad.com/fiction/20101",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/20101-the-law-of-averages.jpg",
           warnings: JSON.stringify({ warnings: ['Profanity']}),
           status:"ONGOING"
        },
        {
           title:"The Scourged Earth",
           author:"Mirrored",
           description:"Derrick is no ones hero.  He is barely dealing with his mundane life when all of humanity is forced to confront the extraordinary. Overnight, all across the world, mysterious machines appear. They offer people the chance to purchase almost anything they can think of. Weapons, medicine and even super human abilities are offered, seemingly for free.\nBut following these machines, come the Scourges. The most dangerous creatures, diseases and machines that infest the universe. Ever growing and battling, these empires of horror and hunger will overhelm and devour the Earth and its inhabitants. Unless Derrick and humanity can stand against all the horrors that battle between the stars.\n+++++++++++++++++++++++++++++++++++++++++++++++++ \nMy first Story, an attempt to turn the standard fantasy litrpg apocalypse into a Sci Fi. Trying for a slower build to power for the MC, so don't expect him to have cheat powers. I delight in helpful crticism so no holding back plz.",
           pageCount:1086,
           linkUrl:"https://www.royalroad.com/fiction/18186",
           imageUrl:"https://www.royalroadcdn.com/public/covers-full/18186-the-scourged-earth.jpg",
           warnings: JSON.stringify({ warnings: ['Gore','Profanity','Sexual Content']}),
           status:"HIATUS"
        }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Stories', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
