const displayText = document.getElementById("displaytext");
const userText = document.getElementById("userInput");
const options = document.getElementById("options");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

class Game {
  constructor(player, rooms) {
    this.player = player;
    this.rooms = rooms; // array of Room objects
    this.currentRoom = this.rooms[0];
  }

  moveToRoom(room) {
    // check if the room is accessible from the current room
    // if it is, set this.currentRoom to the new room and call room.enter()
  }

  // additional methods for combat, checking inventory, etc.
}


class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.items = [];
    this.enemies = [];
    this.options = []
  }

  enter() {
    // display the room's description, items, and enemies
  }

  // Link rooms together
  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }

  // Set properties of the room
  addItem(item) {
    this.items.push(item)
  }

  addEnemy(enemy) {
    this.enemies.push(enemy)
  }

  addPlayerOptions(option1, option2, option3, option4) {
    this.options.push(option1, option2, option3, option4)
  }

  // Return parameters of the room
  returnName() {
    return this.name
  }

  returnDescription() {
    return this.description
  }

  returnItems() {
    return this.items
  }

  returnEnemy() {
    return this.enemies[0].enemyName
  }
}

class Character {
  constructor(name, health, inventory) {
    this.name = name;
    this.health = health;
    this.inventory = inventory; // array of Item objects
  }

  takeDamage(amount) {
    this.health -= amount;
  }

  addItem(item) {
    this.inventory.push(item);
  }
}
// Create rooms
const theFoyerOfAscendancy = new Room("The Foyer of Ascendancy", "There is a staircase to the north that leads up to the main area of the castle");

theFoyerOfAscendancy.addEnemy({
  enemyName: "a ghostly apparition fleeing from your presence",
  enemyHealth: 0,
  enemyDamage: 0,
  enemyDialogue: "You are not worthy of this castle."
})

theFoyerOfAscendancy.addItem('a glimmering, freshly-sharpened sword on the ground')

theFoyerOfAscendancy.addPlayerOptions('Take the sword', 'Move up the stairs')

console.log(theFoyerOfAscendancy)

const theGrandHall = new Room("The Grand Hall", "You are in The Grand Hall. There is a large table in the center of the room, with a few chairs scattered around it. There is a door to the north, and a door to the east.", ["no visible items to loot"], "A mummy is shambling around the room.");

const theArchiveOfAges = new Room("The Archive of Ages", "You are in The Archive of Ages. There are bookshelves lining the walls, and a few tables decorated with dusty tomes.", ["a lucky coin"], "an animated book whizzes around the room.");

const theElixirEnclave = new Room("The Elixir Enclave", "You are in The Elixir Enclave. There are vials of various liquids scattered around the room, and a few tables with beakers and other alchemical equipment.", ["a healing potion"], "an undead scientist is mixing potions, unaware of your presence.");


const theMageQuarters = new Room("The Mage Quarters", "You are in The Mage Quarters. There are a few beds, and a desk with a few books on it.", ["a book titled 'The Origin of Malaz Island"], "a ghoul is feasting on a corpse in the corner.");

const theBattleYard = new Room("The Battle Yard", "You are in The Battle Yard. There are a few training dummies, and a few weapons scattered around the room.", ["freshly packed bandages"], "a skeleton armed with a sword and shield is practicing its swordsmanship.");

const theRoyalArmory = new Room("The Royal Armory", "You are in The Royal Armory. There are a few racks of weapons, and a few suits of armor scattered around the room.", ["a shield"], "an animated suit of armor patrols the room.");

const theSovereignsSeat = new Room("The Sovereign's Seat", "You are in The Sovereign's Seat. There is a large throne in the center of the room, and a few tables scattered around the room.", ["a crown"], "a lich is sitting on the throne, scratching at the floor with a sword seemingly fused to his hand.");

// Link rooms together





// TEST GAME




function displayRoom() {
  displayText.innerHTML = `You are in the ${game.currentRoom.returnName()}. ${game.currentRoom.returnDescription()}. You see ${game.currentRoom.returnItems()}. There is ${game.currentRoom.returnEnemy()}.`;
}

function displayOptions() {
  // Set options (or hide them if there are none)
  option1.innerHTML = game.currentRoom.options[0] || "";
  option2.innerHTML = game.currentRoom.options[1] || "";
  option3.innerHTML = game.currentRoom.options[2] || "";
  option4.innerHTML = game.currentRoom.options[3] || "";
}


let player = new Character("Player", 100, []);
let game = new Game(player, [theFoyerOfAscendancy]);

console.log(player);
console.log(game);

function startGame() {
  displayRoom();
  displayOptions()

  //Player input
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      command = document.getElementById("usertext").value;
      const directions = ["north", "south", "east", "west"]
      if (directions.includes(command.toLowerCase())) {
        currentRoom = currentRoom.move(command)
        displayRoomInfo(currentRoom);
      } else {
        document.getElementById("usertext").value = ""
        alert("that is not a valid command please try again")
      }

    }
  });
}
startGame();


