import { Room, Enemy, Item } from './classes.js';
export { theFoyerOfAscendancy, theGrandHall, theArchiveOfAges, theElixirEnclave, theMageQuarters, theBattleYard, theRoyalArmory, theSovereignsSeat, theKingsTreasury, allRooms };

//////////////////////// ENEMIES ////////////////////////
const ghost = new Enemy('a ghost', 'a ghostly apparition fleeing from your presence', 'You are not worthy of this castle...');
const mummy = new Enemy('the mummy', 'a mummy shambling around the room', '*Terrifying moan!*');
const animatedBook = new Enemy('an animated book', 'an animated book whizzing around the room', '*Pages rustle menacingly!*');
const undeadScientist = new Enemy('an undead scientist', 'an undead scientist mixing potions, unaware of your presence', 'You disturb my research!');
const ghoul = new Enemy('a ghoul', 'a ghoul feasting on a corpse in the corner', 'Fresh meat!');
const skeleton = new Enemy('a skeleton', 'a skeleton armed with a sword and shield practicing its swordsmanship', '*Bone-rattling clatter!*');
const animatedArmor = new Enemy('an animated suit of armor', 'an animated suit of armor patrolling the room', '*Clang! Clang!* Intruder!');
const lich = new Enemy('a lich', 'a lich sitting on the throne, scratching at the floor with a sword seemingly fused to his hand', 'You dare challenge me?!');


//////////////////////// ITEMS ////////////////////////
const sword = new Item('a freshly-sharpened sword');
const luckyCoin = new Item('a lucky coin');
const healingPotion = new Item('a healing potion');
const bandages = new Item('freshly packed bandages');
const shield = new Item('a protective bronze shield');
const goldCoins = new Item('a bag of 1000 gold coins');

//////////////////////// ROOMS ////////////////////////
const theFoyerOfAscendancy = new Room("The Foyer of Ascendancy", `There is a staircase to the north that leads up to the main area of the castle`);
theFoyerOfAscendancy.addEnemy(ghost);
theFoyerOfAscendancy.addItem(sword)
theFoyerOfAscendancy.addPlayerOptions([
  {
    input: 1, text: 'Take the sword', action: (game) => {
      game._player.addItem(game, sword)
      game._currentRoom.removePlayerOptions('Take the sword')
    }
  },
  { input: 2, text: 'Move up the stairs', action: (game) => game.moveToRoom('north') },
]);

//// The Grand Hall
const theGrandHall = new Room("The Grand Hall", "There is a large table in the center of the room, with a few chairs scattered around it. There is a door to the north, and a door to the east");
theGrandHall.addEnemy(mummy);
theGrandHall.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the mummy',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the mummy');
    }
  },
  { input: 2, text: 'Move east to the Battle Yard', action: (game) => game.moveToRoom('east') },
  { input: 3, text: 'Move west to the Archive of Ages', action: (game) => game.moveToRoom('west') },
  { input: 4, text: 'Move back down the stairs to the Foyer of Ascendancy', action: (game) => game.moveToRoom('south') },
]);


///// The Archive of Ages
const theArchiveOfAges = new Room("The Archive of Ages", "There are bookshelves lining the walls, and a few tables decorated with dusty tomes.");
theArchiveOfAges.addEnemy(animatedBook);
theArchiveOfAges.addItem(luckyCoin);
theArchiveOfAges.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the animated book',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the animated book');
    }
  },
  {
    input: 2, text: 'Take the lucky coin', action: (game) => {
      game._player.addItem(game, luckyCoin)
      game._currentRoom.removePlayerOptions('Take the lucky coin')
    }
  },
  { input: 3, text: 'Move north to the Elixir Enclave', action: (game) => game.moveToRoom('north') },
  { input: 4, text: 'Move east to the Grand Hall', action: (game) => game.moveToRoom('east') },
]);

///// The Elixir Enclave
const theElixirEnclave = new Room("The Elixir Enclave", "There are vials of various liquids scattered around the room, and a few tables with beakers and other alchemical equipment.");
theElixirEnclave.addEnemy(undeadScientist);
theElixirEnclave.addItem(healingPotion);
theElixirEnclave.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the undead scientist',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the undead scientist');
    }
  },
  {
    input: 2, text: 'Take the healing potion', action: (game) => {
      game._player.addItem(game, healingPotion)
      game._currentRoom.removePlayerOptions('Take the healing potion')
    }
  },
  { input: 3, text: 'Move east to the Mage Quarters', action: (game) => game.moveToRoom('east') },
  { input: 4, text: 'Move south to the Archive of Ages', action: (game) => game.moveToRoom('south') },
]);

///// The Mage Quarters
const theMageQuarters = new Room("The Mage Quarters", "There are a few beds, and a desk with a few books on it.");
theMageQuarters.addEnemy(ghoul);
theMageQuarters.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the ghoul',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the ghoul');
    }
  },

  { input: 2, text: 'Move north to the Sovereign\'s Seat', action: (game) => game.moveToRoom('north') },
  { input: 3, text: 'Move east to the Royal Armory', action: (game) => game.moveToRoom('east') },
  { input: 4, text: 'Move west to the Elixir Enclave', action: (game) => game.moveToRoom('west') },
]);

///// The Battle Yard
const theBattleYard = new Room("The Battle Yard", "There are a few training dummies, and a few weapons scattered around the room.");
theBattleYard.addEnemy(skeleton);
theBattleYard.addItem(bandages);
theBattleYard.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the skeleton',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the skeleton');
    }
  },
  {
    input: 2, text: 'Take the freshly-packed bandages', action: (game) => {
      game._player.addItem(game, bandages)
      game._currentRoom.removePlayerOptions('Take the freshly-packed bandages')
    }
  },
  { input: 3, text: 'Move north to the Royal Armory', action: (game) => game.moveToRoom('north') },
  { input: 4, text: 'Move west to the Grand Hall ', action: (game) => game.moveToRoom('west') },
]);

///// The Royal Armory
const theRoyalArmory = new Room("The Royal Armory", "There are a few racks of weapons, and a few suits of armor scattered around the room.");
theRoyalArmory.addEnemy(animatedArmor);
theRoyalArmory.addItem(shield);
theRoyalArmory.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the animated suit of armor',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the animated suit of armor');
    }
  },
  {
    input: 2, text: 'Take the shield', action: (game) => {
      game._player.addItem(game, shield)
      game._currentRoom.removePlayerOptions('Take the shield')
    }
  },
  { input: 3, text: 'Move south to the Battle Yard', action: (game) => game.moveToRoom('south') },
  { input: 4, text: 'Move west to the Mage Quarters', action: (game) => game.moveToRoom('west') },
]);

///// The Sovereign's Seat
const theSovereignsSeat = new Room("The Sovereign's Seat", "There is a large throne in the center of the room, with a few chairs scattered around it.");
theSovereignsSeat.addEnemy(lich);
theSovereignsSeat.addPlayerOptions([
  {
    input: 1,
    text: 'Fight the lich',
    action: (game) => {
      game._player.fight(game, game._currentRoom._enemies[0]);
      game._currentRoom.removePlayerOptions('Fight the lich');
    }
  },
  { input: 2, text: 'Move north to the King\'s Treasury', action: (game) => game.moveToRoom('north') },
  { input: 3, text: 'Move south to the Mage Quarters', action: (game) => game.moveToRoom('south') }
]);

///// The King's Treasury
const theKingsTreasury = new Room("The King's Treasury", "There are a few empty chests scattered around the room and something glittering in the corner...");
theKingsTreasury.addItem(goldCoins);
theKingsTreasury.addPlayerOptions([
  {
    input: 1, text: 'Take the big bag of gold coins', action: (game) => {
      game._player.addItem(game, goldCoins)
      game._currentRoom.removePlayerOptions('Take the big bag of gold coins')
    }
  },
  { input: 2, text: 'Move west to the Mage Quarters', action: (game) => game.moveToRoom('west') },
]);


///// Link rooms together
// .linkRoom(roomNorth, roomEast, roomSouth, roomWest)
theFoyerOfAscendancy.linkRoom(theGrandHall, null, null, null);
theGrandHall.linkRoom(null, theBattleYard, theFoyerOfAscendancy, theArchiveOfAges)
theArchiveOfAges.linkRoom(theElixirEnclave, theGrandHall, null, null)
theBattleYard.linkRoom(theRoyalArmory, null, theGrandHall, null)
theElixirEnclave.linkRoom(null, theMageQuarters, theArchiveOfAges, null)
theMageQuarters.linkRoom(theSovereignsSeat, theRoyalArmory, null, theElixirEnclave)
theRoyalArmory.linkRoom(null, null, theBattleYard, theMageQuarters);
theSovereignsSeat.linkRoom(theKingsTreasury, null, theMageQuarters, null);
theKingsTreasury.linkRoom(null, null, null, theMageQuarters);

const allRooms = [theFoyerOfAscendancy, theGrandHall, theArchiveOfAges, theElixirEnclave, theMageQuarters, theBattleYard, theRoyalArmory, theSovereignsSeat, theKingsTreasury];