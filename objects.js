import { Room, Enemy, Item } from './classes.js';
export { theFoyerOfAscendancy, theGrandHall, theArchiveOfAges, theElixirEnclave, theMageQuarters, theBattleYard, theRoyalArmory, theSovereignsSeat, theKingsTreasury, allRooms };

//////////////////////// ENEMIES ////////////////////////
const ghost = new Enemy("a ghostly apparition fleeing from your presence", 0, 0, "You are not worthy of this castle...");
const mummy = new Enemy("a mummy shambling around the room", 15, 2, "*Terrifying moan!*");
const animatedBook = new Enemy("An animated book whizzing around the room", 10, 1, "*Pages rustle menacingly!*");
const undeadScientist = new Enemy("an undead scientist mixing potions, unaware of your presence", 12, 2, "You disturb my research!");
const ghoul = new Enemy("A ghoul feasting on a corpse in the corner", 18, 3, "Fresh meat!");
const skeleton = new Enemy("a skeleton armed with a sword and shield practicing its swordsmanship", 20, 3, "*Bone-rattling clatter!*");
const animatedArmor = new Enemy("an animated suit of armor patrolling the room", 25, 4, "*Clang! Clang!* Intruder!");
const lich = new Enemy("a lich sitting on the throne, scratching at the floor with a sword seemingly fused to his hand", 30, 5, "You dare challenge me?!");


//////////////////////// ITEMS ////////////////////////
const sword = new Item('a glimmering, freshly-sharpened sword on the ground');
const luckyCoin = new Item('a lucky coin');
const healingPotion = new Item('a healing potion');
const malazBook = new Item("a book titled 'The Origin of Malaz Island'");
const bandages = new Item('freshly packed bandages');
const shield = new Item('a protective bronze shield');
const goldCoins = new Item('a bag of 1000 gold coins');

//////////////////////// ROOMS ////////////////////////
const theFoyerOfAscendancy = new Room("The Foyer of Ascendancy", "There is a staircase to the north that leads up to the main area of the castle");
theFoyerOfAscendancy.addEnemy(ghost);
theFoyerOfAscendancy.addItem(sword)
theFoyerOfAscendancy.addPlayerOptions([
  { input: 1, text: 'Take the sword', action: (game) => game._player.addItem(sword) },
  { input: 2, text: 'Move up the stairs to the Grand Hall', action: (game) => game.moveToRoom('north') },
]);

//// The Grand Hall
const theGrandHall = new Room("The Grand Hall", "There is a large table in the center of the room, with a few chairs scattered around it. There is a door to the north, and a door to the east.");
theGrandHall.addEnemy(mummy);
theGrandHall.addPlayerOptions([
  { input: 1, text: 'Fight the mummy', action: (game) => game._player.fight(mummy) },
  { input: 2, text: 'Move east to The Battle Yard', action: (game) => game.moveToRoom('east') },
  { input: 3, text: 'Move west to The Archive of Ages', action: (game) => game.moveToRoom('west') },
  { input: 4, text: 'Move back down the stairs to The Foyer of Ascendancy', action: (game) => game.moveToRoom('south') },
]);

///// The Archive of Ages
const theArchiveOfAges = new Room("The Archive of Ages", "There are bookshelves lining the walls, and a few tables decorated with dusty tomes.");
theArchiveOfAges.addEnemy(animatedBook);
theArchiveOfAges.addItem(luckyCoin);
theArchiveOfAges.addPlayerOptions([
  { input: 1, text: 'Fight the animated book', action: (game) => game._player.fight(animatedBook) },
  { input: 2, text: 'Take the lucky coin', action: (game) => game._player.addItem(luckyCoin) },
  { input: 3, text: 'Move to the Elixir Enclave to the north', action: (game) => game.moveToRoom('north') },
  { input: 4, text: 'Move to the Grand Hall to the east', action: (game) => game.moveToRoom('east') },
]);

///// The Elixir Enclave
const theElixirEnclave = new Room("The Elixir Enclave", "There are vials of various liquids scattered around the room, and a few tables with beakers and other alchemical equipment.");
theElixirEnclave.addEnemy(undeadScientist);
theElixirEnclave.addItem(healingPotion);
theElixirEnclave.addPlayerOptions([
  { input: 1, text: 'Fight the undead scientist', action: (game) => game._player.fight(undeadScientist) },
  { input: 2, text: 'Take the healing potion', action: (game) => game._player.addItem(healingPotion) },
  { input: 3, text: 'Move to the Mage Quarters to the east', action: (game) => game.moveToRoom('east') },
  { input: 4, text: 'Move to the Archive of Ages to the south', action: (game) => game.moveToRoom('south') },
]);

///// The Mage Quarters
const theMageQuarters = new Room("The Mage Quarters", "There are a few beds, and a desk with a few books on it.");
theMageQuarters.addEnemy(ghoul);
theMageQuarters.addItem(malazBook);
theMageQuarters.addPlayerOptions([
  { input: 1, text: 'Fight the ghoul', action: (game) => game._player.fight(ghoul) },
  { input: 2, text: 'Take the book titled "The Origin of Malaz Island"', action: (game) => game._player.addItem(malazBook) },
  { input: 3, text: 'Move to the Sovereign\'s Seat to the north', action: (game) => game.moveToRoom('north') },
  { input: 4, text: 'Move to the Royal Armory to the west', action: (game) => game.moveToRoom('west') },
  { input: 5, text: 'Move to the Elixir Enclave to the west', action: (game) => game.moveToRoom('west') },
]);

///// The Battle Yard
const theBattleYard = new Room("The Battle Yard", "There are a few training dummies, and a few weapons scattered around the room.");
theBattleYard.addEnemy(skeleton);
theBattleYard.addItem(bandages);
theBattleYard.addPlayerOptions([
  { input: 1, text: 'Fight the skeleton', action: (game) => game._player.fight(skeleton) },
  { input: 2, text: 'Take the freshly packed bandages', action: (game) => game._player.addItem(bandages) },
  { input: 3, text: 'Move to the Royal Armory to the north', action: (game) => game.moveToRoom('north') },
  { input: 4, text: 'Move to the Grand Hall to the west', action: (game) => game.moveToRoom('west') },
]);

///// The Royal Armory
const theRoyalArmory = new Room("The Royal Armory", "You are in The Royal Armory. There are a few racks of weapons, and a few suits of armor scattered around the room.");
theRoyalArmory.addEnemy(animatedArmor);
theRoyalArmory.addItem(shield);
theRoyalArmory.addPlayerOptions([
  { input: 1, text: 'Fight the animated suit of armor', action: (game) => game._player.fight(animatedArmor) },
  { input: 2, text: 'Take the shield', action: (game) => game._player.addItem(shield) },
  { input: 3, text: 'Move to the Battle Yard to the south', action: (game) => game.moveToRoom('south') },
  { input: 4, text: 'Move to the Mage Quarters to the east', action: (game) => game.moveToRoom('east') },
]);

///// The Sovereign's Seat
const theSovereignsSeat = new Room("The Sovereign's Seat", "You are in The Sovereign's Seat. There is a large throne in the center of the room, with a few chairs scattered around it.");
theSovereignsSeat.addEnemy(lich);
theSovereignsSeat.addPlayerOptions([
  { input: 1, text: 'Fight the lich', action: (game) => game._player.fight(lich) },
  { input: 2, text: 'Move to the Mage Quarters to the south', action: (game) => game.moveToRoom('south') },
]);

///// The King's Treasury
const theKingsTreasury = new Room("The King's Treasury", "You are in The King's Treasury. There are a few empty chests scattered around the room and something glittering in the corner...");
theKingsTreasury.addItem(goldCoins);
theKingsTreasury.addPlayerOptions([
  { input: 1, text: 'Take the bag of gold coins', action: (game) => game._player.addItem(goldCoins) },
  { input: 2, text: 'Move to the Mage Quarters to the west', action: (game) => game.moveToRoom('west') },
]);


///// Link rooms together
// .linkRoom(roomNorth, roomEast, roomSouth, roomWest)
theFoyerOfAscendancy.linkRoom(theGrandHall, null, null, null);
theGrandHall.linkRoom(null, theBattleYard, theFoyerOfAscendancy, theArchiveOfAges)
theArchiveOfAges.linkRoom(theElixirEnclave, theGrandHall, null, null)
theBattleYard.linkRoom(theRoyalArmory, null, theGrandHall, null)
theElixirEnclave.linkRoom(null, theMageQuarters, theArchiveOfAges, null)
theRoyalArmory.linkRoom(null, null, theBattleYard, theMageQuarters);
theSovereignsSeat.linkRoom(null, null, theMageQuarters, null);
theKingsTreasury.linkRoom(null, null, null, theMageQuarters);

const allRooms = [theFoyerOfAscendancy, theGrandHall, theArchiveOfAges, theElixirEnclave, theMageQuarters, theBattleYard, theRoyalArmory, theSovereignsSeat, theKingsTreasury];