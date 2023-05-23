import { Room, Enemy, Item } from './classes.js';
export { theFoyerOfAscendancy, theGrandHall, theArchiveOfAges, theElixirEnclave, theMageQuarters, theBattleYard, theRoyalArmory, theSovereignsSeat, theKingsTreasury, allRooms };

//////////////////////// ENEMIES ////////////////////////
const ghost = new Enemy("a ghostly apparition fleeing from your presence", 0, 0, "You are not worthy of this castle...");
const mummy = new Enemy("A mummy shambling around the room", 15, 2, "*Terrifying moan!*");
const animatedBook = new Enemy("An animated book whizzing around the room", 10, 1, "*Pages rustle menacingly!*");
const undeadScientist = new Enemy("An undead scientist mixing potions, unaware of your presence", 12, 2, "You disturb my research!");
const ghoul = new Enemy("A ghoul feasting on a corpse in the corner", 18, 3, "Fresh meat!");
const skeleton = new Enemy("A skeleton armed with a sword and shield practicing its swordsmanship", 20, 3, "*Bone-rattling clatter!*");
const animatedArmor = new Enemy("An animated suit of armor patrolling the room", 25, 4, "*Clang! Clang!* Intruder!");
const lich = new Enemy("A lich sitting on the throne, scratching at the floor with a sword seemingly fused to his hand", 30, 5, "You dare challenge me?!");


//////////////////////// ITEMS ////////////////////////
const sword = new Item('a glimmering, freshly-sharpened sword on the ground');
const luckyCoin = new Item('A lucky coin');
const healingPotion = new Item('A healing potion');
const malazBook = new Item("A book titled 'The Origin of Malaz Island'");
const bandages = new Item('Freshly packed bandages');
const shield = new Item('A protective bronze shield');
const goldCoins = new Item('A bag of 1000 gold coins');

//////////////////////// ROOMS ////////////////////////
const theFoyerOfAscendancy = new Room("The Foyer of Ascendancy", "There is a staircase to the north that leads up to the main area of the castle");
theFoyerOfAscendancy.addEnemy(ghost);
theFoyerOfAscendancy.addItem(sword)
theFoyerOfAscendancy.addPlayerOptions([
  { input: 1, text: 'Take the sword', action: (game) => game._player.addItem(sword) },
  { input: 2, text: 'Move up the stairs to the Grand Hall', action: (game) => game.moveToRoom('north') },
]);


///// The Grand Hall
const theGrandHall = new Room("The Grand Hall", "You are in The Grand Hall. There is a large table in the center of the room, with a few chairs scattered around it. There is a door to the north, and a door to the east.");
theGrandHall.addEnemy(mummy);


theFoyerOfAscendancy.addPlayerOptions([
  { input: 1, text: 'Take the sword', action: (game) => game._player.addItem(sword) },
  { input: 2, text: 'Move up the stairs to the Grand Hall', action: (game) => game.moveToRoom('north') },
]);



///// The Archive of Ages
const theArchiveOfAges = new Room("The Archive of Ages", "You are in The Archive of Ages. There are bookshelves lining the walls, and a few tables decorated with dusty tomes.");
theArchiveOfAges.addEnemy(animatedBook);
theArchiveOfAges.addItem(luckyCoin);
theArchiveOfAges.addPlayerOptions('Fight the animated book', 'Take the lucky coin', 'Move to the Elixir Enclave to the north', 'Move to the Grand Hall to the east');

///// The Elixir Enclave
const theElixirEnclave = new Room("The Elixir Enclave", "You are in The Elixir Enclave. There are vials of various liquids scattered around the room, and a few tables with beakers and other alchemical equipment.");
theElixirEnclave.addEnemy(undeadScientist);
theElixirEnclave.addItem(healingPotion);
theElixirEnclave.addPlayerOptions('Fight the undead scientist', 'Take the healing potion', 'Move to the Mage Quarters to the east', 'Move to the Archive of Ages to the south');

///// The Mage Quarters
const theMageQuarters = new Room("The Mage Quarters", "You are in The Mage Quarters. There are a few beds, and a desk with a few books on it.");
theMageQuarters.addEnemy(ghoul);
theMageQuarters.addItem(malazBook);
theMageQuarters.addPlayerOptions('Fight the ghoul', 'Take the book titled "The Origin of Malaz Island"', 'Move to the Sovereign\'s Seat to the north', 'Move to the Royal Armory to the west', 'Move to the Elixir Enclave to the west');

///// The Battle Yard
const theBattleYard = new Room("The Battle Yard", "You are in The Battle Yard. There are a few training dummies, and a few weapons scattered around the room.");
theBattleYard.addEnemy(skeleton);
theBattleYard.addItem(bandages);
theBattleYard.addPlayerOptions('Fight the skeleton', 'Take the freshly packed bandages', 'Move to the Royal Armory to the north', 'Move to the Grand Hall to the west');

///// The Royal Armory
const theRoyalArmory = new Room("The Royal Armory", "You are in The Royal Armory. There are a few racks of weapons, and a few suits of armor scattered around the room.");
theRoyalArmory.addEnemy(animatedArmor);
theRoyalArmory.addItem(shield);
theRoyalArmory.addPlayerOptions('Fight the animated suit of armor', 'Take the shield', 'Move to the Battle Yard to the south', 'Move to the Mage Quarters to the east');

///// The Sovereign's Seat
const theSovereignsSeat = new Room("The Sovereign's Seat", "You are in The Sovereign's Seat. There is a large throne in the center of the room, with a few chairs scattered around it.");
theSovereignsSeat.addEnemy(lich);
theSovereignsSeat.addPlayerOptions('Fight the lich', 'Move to the Mage Quarters to the south');

///// The King's Treasury
const theKingsTreasury = new Room("The King's Treasury", "You are in The King's Treasury. There are a few empty chests scattered around the room and something glittering in the corner...");
theKingsTreasury.addItem(goldCoins);
theKingsTreasury.addPlayerOptions('Take the bag of gold coins', 'Move to the Mage Quarters to the west');

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