"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Videos", [
      {
        embedURL:
          "https://www.youtube.com/watch?v=liQLtCLq3tc&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Valheim",
        about: `A brutal exploration and survival game for 1-10 players, set in a
        procedurally-generated purgatory inspired by viking culture. Battle,
        build, and conquer your way to a saga worthy of Odin’s patronage!`,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/header.jpg",
        developer: "Iron Gate AB",
        publisher: "Coffee Stain Publishing",
        releaseDate: "Feb 2, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=ifZA6IMeLs8&ab_channel=IGN?rel=0&modestbranding=1",
        title: "No Man's Sky",
        about: `No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.`,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/nms.jpg",
        developer: "Hello Games",
        publisher: "Hello Games",
        releaseDate: "Aug 12, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=VNd7tpPzmzE&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Horizon Zero Dawn",
        about: `Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG! `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/hzd.jpg",
        developer: "Guerrilla",
        publisher: "Playstation Mobile, Inc.",
        releaseDate: "Aug 7, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=ohClxMmNLQQ&ab_channel=ElectronicArts?rel=0&modestbranding=1",
        title: "It Takes Two",
        about: `Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of gleefully disruptive gameplay challenges. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/itt.jpg",
        developer: "Hazelight",
        publisher: "Electronic Arts",
        releaseDate: "Mar 25, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=w6bE11FrSFM&ab_channel=GameSpotTrailers?rel=0&modestbranding=1",
        title: "Control Ultimate Edition",
        about: `Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/cue.jpg",
        developer: "Remedy Entertainment",
        publisher: "505 Games",
        releaseDate: "Aug 27, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=QkkoHAzjnUs&ab_channel=RockstarGames?rel=0&modestbranding=1",
        title: "Grand Theft Auto V",
        about: `Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/gta.jpg",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        releaseDate: "Apr 14, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=BO8lX3hDU30&ab_channel=Cyberpunk2077?rel=0&modestbranding=1",
        title: "Cyberpunk 2077",
        about: `Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/cyberpunk.jpg",
        developer: "CD Projekt Red",
        publisher: "CD Projekt Red",
        releaseDate: "Dec 9, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=2kPSl2vyu2Y&ab_channel=Xbox?rel=0&modestbranding=1",
        title: "Ori and the Will of the Wisps",
        about: `Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ori.jpg",
        developer: "Moon Studios GmbH",
        publisher: "Xbox Game Studios",
        releaseDate: "Mar 10, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=lFQLOwUNR8g&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Fall Guys: Ultimate Knockout",
        about: `Fall Guys is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round of escalating chaos until one victor remains! `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/fallg.jpg",
        developer: "Mediatonic",
        publisher: "Devolver Digital",
        releaseDate: "Aug 4, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=r5JIBaasuE8&ab_channel=SeaofThieves?rel=0&modestbranding=1",
        title: "Sea of Thieves",
        about: `Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose. `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/seat.jpg",
        developer: "Rare Ltd",
        publisher: "Xbox Game Studios",
        releaseDate: "Jun 3, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=mD8x5xLHRho&ab_channel=Nintendo?rel=0&modestbranding=1",
        title: "Hades",
        about: `Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre. `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/had.jpg",
        developer: "Supergiant Games",
        publisher: "Supergiant Games",
        releaseDate: "Sep 17, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=tCI396HyhbQ&ab_channel=PlayStation?rel=0&modestbranding=1",
        title: "Death Stranding",
        about: `From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/dst.jpg",
        developer: "Kojima Productions",
        publisher: "505 Games",
        releaseDate: "Jul 14, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=VqeMjHmL9eg&ab_channel=TitanfallOfficial?rel=0&modestbranding=1",
        title: "Titanfall® 2",
        about: `Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force. `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/tf2.jpg",
        developer: "Respawn Entertainment",
        publisher: "Electronic Arts",
        releaseDate: "Oct 28, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=_q51LZ2HpbE&ab_channel=EAStarWars?rel=0&modestbranding=1",
        title: "Star Wars™ Battlefront™ II",
        about: `Be the hero in the ultimate STAR WARS™ battle fantasy with STAR WARS™ Battlefront™ II: Celebration Edition! `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/bf2.jpg",
        developer: "DICE",
        publisher: "Electronic Arts",
        releaseDate: "Nov 16, 2017",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=y0sJ5s7fUMQ&ab_channel=LostVector?rel=0&modestbranding=1",
        title: "Left 4 Dead 2",
        about: `Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/lfd2.jpg",
        developer: "Valve",
        publisher: "Valve",
        releaseDate: "Nov 16, 2009",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=sUH4cv9EPwI&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Halo: The Master Chief Collection",
        about: `The Master Chief’s iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you’re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience. `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/mcc.jpg",
        developer: "343 Industries",
        publisher: "Xbox Game Studios",
        releaseDate: "Dec 3, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=_zDZYrIUgKE&ab_channel=BandaiNamcoEntertainmentAmerica?rel=0&modestbranding=1",
        title: "Dark Souls™ III",
        about: `Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness! `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ds3.jpg",
        developer: "FromSoftware, Inc.",
        publisher: "FromSoftware, Inc.",
        releaseDate: "Apr 11, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=5xy4n73WOMM&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Forza Horizon 4",
        about: `Dynamic seasons change everything at the world’s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/forza.jpg",
        developer: "Playground Games",
        publisher: "Xbox Game Studios",
        releaseDate: "Mar 9, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=N6kd1SYHW5k&ab_channel=Xbox?rel=0&modestbranding=1",
        title: "Age of Empires II: Definitive Edition",
        about: `Age of Empires II: Definitive Edition celebrates the 20th anniversary of one of the most popular strategy games ever with stunning 4K Ultra HD graphics, a new and fully remastered soundtrack, and brand-new content, “The Last Khans” with 3 new campaigns and 4 new civilizations. `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ae2.jpg",
        developer: "Forgotten Empires",
        publisher: "Xbox Game Studios",
        releaseDate: "Nov 14, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=fCcRNUlE7ek&ab_channel=Xbox?rel=0&modestbranding=1",
        title: "Age of Empires III: Definitive Edition",
        about: `Age of Empires III: Definitive Edition completes the celebration of one of the most beloved real-time strategy franchises with remastered graphics and music, all previously released expansions and brand-new content to enjoy for the very first time. `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ae3.jpg",
        developer: "Tantalus Media",
        publisher: "Xbox Game Studios",
        releaseDate: "Oct 15, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=Awaa0OhDNj4&ab_channel=GameSpot?rel=0&modestbranding=1",
        title: "Fable Anniversary",
        about: `FOR EVERY CHOICE, A CONSEQUENCE.Fully re-mastered with HD visuals and audio, Fable Anniversary is a stunning rendition of the original game that will delight faithful fans and new players alike! The all new Heroic difficulty setting will test the mettle of even the most hardcore Fable fan. `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/fab.jpg",
        developer: "Lionhead Studios",
        publisher: "Xbox Game Studios",
        releaseDate: "Sep 12, 2014",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=lTjRZ__-278&ab_channel=BethesdaSoftworks?rel=0&modestbranding=1",
        title: "The Elder Scrolls V: Skyrim Special Edition",
        about: `Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space...`,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/sky.jpg",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        releaseDate: "Oct 27, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=2p71Wu1TkY4&ab_channel=BandaiNamcoEntertainmentAmerica?rel=0&modestbranding=1",
        title: "DARK SOULS™ II: Scholar of the First Sin",
        about: `DARK SOULS™ II: Scholar of the First Sin brings the franchise’s renowned obscurity & gripping gameplay to a new level. Join the dark journey and experience overwhelming enemy encounters, diabolical hazards, and unrelenting challenge.  `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ds2.jpg",
        developer: "Fromsoftware, Inc",
        publisher: "Bandai Namco Entertainment",
        releaseDate: "Apr 1, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=n8i53TtQ6IQ&ab_channel=MassEffect?rel=0&modestbranding=1",
        title: "Mass Effect™ Legendary Edition",
        about: `The Mass Effect™ Legendary Edition includes single-player base content and over 40 DLC from the highly acclaimed Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons, armors, and packs — remastered and optimized for 4K Ultra HD.  `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/me3.jpg",
        developer: "BioWare",
        publisher: "Electronic Arts",
        releaseDate: "May 14, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=eaW0tYpxyp0&ab_channel=RockstarGames?rel=0&modestbranding=1",
        title: "Red Dead Redemption 2",
        about: `Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/rdr2.jpg",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        releaseDate: "Dec 5, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=ot7uXNQskhs&ab_channel=ConcernedApe?rel=0&modestbranding=1",
        title: "Stardew Valley",
        about: `You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/sdv.jpg",
        developer: "ConcernedApe",
        publisher: "ConcernedApe",
        releaseDate: "Feb 26, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=7jk8prJA9nI&ab_channel=GameSpotTrailers?rel=0&modestbranding=1",
        title: "DayZ",
        about: `How long can you survive a post-apocalyptic world? A land overrun with an infected "zombie" population, where you compete with other survivors for limited resources. Will you team up with strangers and stay strong together? Or play as a lone wolf to avoid betrayal? This is DayZ – this is your story.`,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/dayz.jpg",
        developer: "Bohemia Interactive",
        publisher: "Bohemia Interactive",
        releaseDate: "Dec 13, 2018",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=KfjG9ZLGBHE&ab_channel=BANDAINAMCOEntertainmentEurope?rel=0&modestbranding=1",
        title: "DARK SOULS™: REMASTERED",
        about: `Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.  `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/dsr.jpg",
        developer: "QLOC",
        publisher: "FromSoftware, Inc",
        releaseDate: "Apr 14, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=Qwgq_9EOCTg&ab_channel=GearboxOfficial?rel=0&modestbranding=1",
        title: "Risk of Rain 2",
        about: `Escape a chaotic alien planet by fighting through hordes of frenzied monsters – with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/rr2.jpg",
        developer: "Hopoo Games",
        publisher: "Gearbox Publishing",
        releaseDate: "Aug 11, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=OotQrKEqe94&ab_channel=MonsterHunter?rel=0&modestbranding=1",
        title: "Monster Hunter: World",
        about: `Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.  `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/mhw.jpg",
        developer: "CAPCOM Co., Ltd.",
        publisher: "CAPCOM Co., Ltd.",
        releaseDate: "Aug 9, 2018",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=3j9o1OptMS8&ab_channel=GameSpot?rel=0&modestbranding=1",
        title: "Spyro™ Reignited Trilogy",
        about: `Same sick burns, same smoldering attitude, now all scaled up in stunning HD, Spyro is back in the Spyro™ Reignited Trilogy! Rekindle the fire with remastered versions of the original three games, Spyro™ the Dragon, Spyro™ 2: Ripto's Rage! and Spyro™: Year of the Dragon. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/spy.jpg",
        developer: "Toys for Bob",
        publisher: "Activision",
        releaseDate: "Sep 3, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=5KdE0p2joJw&ab_channel=SidMeier%27sCivilization?rel=0&modestbranding=1",
        title: "Sid Meier’s Civilization® VI",
        about: `Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history’s greatest leaders to build a civilization that will stand the test of time. Play as one of 20 historical leaders including Roosevelt (America) and Victoria (England). `,
        genreId: 6,
        imageURL: "https://netsteambucket.s3.amazonaws.com/c6.jpg",
        developer: "Firaxis Games",
        publisher: "2K",
        releaseDate: "Oct 20, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=Rz2SNm8VguE&ab_channel=Subnautica?rel=0&modestbranding=1",
        title: "Subnautica",
        about: `Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive. `,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/sn.jpg",
        developer: "Unknown Worlds Entertainment",
        publisher: "Unknown Worlds Entertainment",
        releaseDate: "Jan 23, 2018",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=bTWTFX8qzPI&ab_channel=LarianStudios?rel=0&modestbranding=1",
        title: "Divinity: Original Sin 2 - Definitive Edition",
        about: `The critically acclaimed RPG that raised the bar, from the creators of Baldur's Gate 3. Gather your party. Master deep, tactical combat. Venture as a party of up to four - but know that only one of you will have the chance to become a God. `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/dos2.jpg",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        releaseDate: "Sep 14, 2017",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=SEpWlFfpEkU&ab_channel=GameSpotTrailers?rel=0&modestbranding=1",
        title: "Gears 5",
        about: `Honor the heroes of Gears in Operation 6, available now. Jump in with three new characters, a fresh multiplayer map, renewed Tour of Duty and more. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/g5.jpg",
        developer: "The Coalition",
        publisher: "Xbox Game Studios",
        releaseDate: "Sep 9, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=ETWtvVGFNqU&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Nioh 2 – The Complete Edition",
        about: `Battle hordes of yokai in this masocore Action RPG. Create your protagonist and embark on an adventure through a myriad of locales across Japan during the Sengoku period. Utilize the new Yokai Shift ability to defeat even the most ferocious yokai and be prepared to brave through Dark Realms created by... `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/n2.jpg",
        developer: "Koei Tecmo Games",
        publisher: "Koei Tecmo Games",
        releaseDate: "Feb 5, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=Q3rDhoWcVgQ&ab_channel=Windows?rel=0&modestbranding=1",
        title: "Age of Empires: Definitive Edition",
        about: `Age of Empires, the pivotal real-time strategy game that launched a 20-year legacy returns with modernized gameplay, all-new 4K visuals, 8-person multiplayer battles and a host of other new features. Welcome back to history. `,
        genreId: 6,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ae1.jpg",
        developer: "Forgotten Empires",
        publisher: "Xbox Game Studios",
        releaseDate: "Aug 9, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=nFpoDlH6Sxs&ab_channel=MORDHAU?rel=0&modestbranding=1",
        title: "MORDHAU",
        about: `MORDHAU is a multiplayer medieval slasher. Create your mercenary and fight in brutal battles where you will experience fast paced combat, castle sieges, cavalry charges, and more.  `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/mdh.jpg",
        developer: "Triternion",
        publisher: "Triternion",
        releaseDate: "Apr 29, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=4OgoTZXPACo&ab_channel=GameSpot?rel=0&modestbranding=1",
        title: "Sekiro™: Shadows Die Twice - GOTY Edition",
        about: `Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/sko.jpg",
        developer: "FromSoftware",
        publisher: "Activision",
        releaseDate: "Mar 21, 2019",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=hl-VV9loYLw&ab_channel=Battlefield?rel=0&modestbranding=1",
        title: "Battlefield 4™",
        about: `Embrace unrivaled destruction in Battlefield 4™. Revel in the glorious chaos of all-out war packed with rewarding, tactical challenges in an interactive environment. `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/bf4.jpg",
        developer: "DICE",
        publisher: "Electronic Arts",
        releaseDate: "Oct 29, 2013",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=FW9vsrPWujI&ab_channel=ARK%3ASurvivalEvolved?rel=0&modestbranding=1",
        title: "ARK: Survival Evolved",
        about: `Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape! `,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ark.jpg",
        developer: "Studio Wildcard",
        publisher: "Studio Wildcard",
        releaseDate: "Aug 27, 2017",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=d9Gu1PspA3Y&ab_channel=Borderlands?rel=0&modestbranding=1",
        title: "Borderlands 3",
        about: `The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds and enemies as one of four new Vault Hunters.`,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/bl3.jpg",
        developer: "Gearbox Software",
        publisher: "2K",
        releaseDate: "Mar 13, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=6KaMt91ELHU&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Total War: WARHAMMER III",
        about: `The cataclysmic conclusion to the Total War: WARHAMMER trilogy is coming. Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them?  `,
        genreId: 6,
        imageURL: "https://netsteambucket.s3.amazonaws.com/twh3.jpg",
        developer: "Creative Assembly",
        publisher: "SEGA",
        releaseDate: "Late 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=XmyF8IjfSUI&ab_channel=GameSpot?rel=0&modestbranding=1",
        title: "The Outer Worlds",
        about: `The Outer Worlds is an award-winning single-player RPG from Obsidian Entertainment and Private Division. As you explore a space colony, the character you decide to become will determine how this player-driven story unfolds. In the colony's corporate equation, you are the unplanned variable.  `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/tow.jpg",
        developer: "Obsidian Entertainment",
        publisher: "Private Division",
        releaseDate: "Oct 23, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=tax4e4hBBZc&ab_channel=Valve?rel=0&modestbranding=1",
        title: "Portal 2",
        about: `The "Perpetual Testing Initiative" has been expanded to allow you to design co-op puzzles for you and your friends! `,
        genreId: 6,
        imageURL: "https://netsteambucket.s3.amazonaws.com/port2.jpg",
        developer: "Valve",
        publisher: "Valve",
        releaseDate: "Apr 18, 2011",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=UAO2urG23S4&ab_channel=TeamCherry?rel=0&modestbranding=1",
        title: "Hollow Knight",
        about: `Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/hk.jpg",
        developer: "Team Cherry",
        publisher: "Team Cherry",
        releaseDate: "Feb 24, 2017",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=bu6Kwvd695w&ab_channel=TheBehemoth?rel=0&modestbranding=1",
        title: "Castle Crashers®",
        about: `Hack, slash, and smash your way to victory in this award winning 2D arcade adventure from The Behemoth! `,
        genreId: 4,
        imageURL: "https://netsteambucket.s3.amazonaws.com/ccr.jpg",
        developer: "The Behemoth",
        publisher: "The Behemoth",
        releaseDate: "Sep 26, 2012",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=zi2GvqboQfY&ab_channel=Spore?rel=0&modestbranding=1",
        title: "SPORE™",
        about: `Be the architect of your own universe with Spore, an exciting single-player adventure. From Single Cell to Galactic God, evolve your creature in a universe of your own creations.  `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/spr.jpg",
        developer: "Maxis™",
        publisher: "Electronic Arts",
        releaseDate: "Dec 19, 2008",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=9IM3YE0BZuo&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Dying Light",
        about: `First-person action survival game set in a post-apocalyptic open world overrun by flesh-hungry zombies. Roam a city devastated by a mysterious virus epidemic. Scavenge for supplies, craft weapons, and face hordes of the infected.`,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/dyl.jpg",
        developer: "Techland",
        publisher: "Techland Publishing",
        releaseDate: "Jan 26, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=c0i88t0Kacs&ab_channel=TheWitcher?rel=0&modestbranding=1",
        title: "The Witcher® 3: Wild Hunt",
        about: `As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/tw3.jpg",
        developer: "Cd Projekt Red",
        publisher: "Cd Projekt Red",
        releaseDate: "May 18, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=XW7Of3g2JME&ab_channel=GameSpot?rel=0&modestbranding=1",
        title: "Fallout 4",
        about: `Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/fo4.jpg",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        releaseDate: "Nov 9, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=jJqxfkgSUog&ab_channel=DragonAge?rel=0&modestbranding=1",
        title: "Dragon Age™ Inquisition",
        about: `Winner of over 130 Game of the Year awards, discover the definitive Dragon Age: Inquisition experience. The Game of the Year Edition includes the critically acclaimed game, all three official add-ons - Jaws of Hakkon, The Descent, and Trespasser - and more. `,
        genreId: 5,
        imageURL: "https://netsteambucket.s3.amazonaws.com/dai.jpg",
        developer: "BioWare",
        publisher: "Electronic Arts",
        releaseDate: "Nov 18, 2014",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Videos", null, {});
  },
};