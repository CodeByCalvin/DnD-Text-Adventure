//////////////////////// GAME CLASS ////////////////////////
export class Game {
  constructor(player, rooms, startingRoomIndex = 0) {
    this._player = player;
    this._rooms = rooms;
    this._currentRoom = this._rooms[startingRoomIndex];
  }

  moveToRoom(direction) {
    const newRoom = this._currentRoom[`_room${direction.charAt(0).toUpperCase() + direction.slice(1)}`];
    if (newRoom) {
      this._currentRoom = newRoom;
      newRoom.enter();
    } else {
      console.log(`You can't go ${direction} from here.`);
    }
  }

  setResponse(response) {
    const gameResponseText = document.getElementById('gameresponse');
    gameResponseText.innerHTML = response;
    gameResponseText.style.color = "red"

    // Set the colour to white (so the space remains)
    setTimeout(() => {
      gameResponseText.style.color = "white";
    }, 1000);
  }

  // Get current room
  get currentRoom() {
    return this._currentRoom;
  }
}

//////////////////////// ROOM CLASS ////////////////////////
export class Room {
  constructor(name, description) {
    this._name = name;
    this._description = description;
    this._items = [];
    this._enemies = [];
    this._options = []
  }

  // Link rooms together
  linkRoom(roomNorth, roomEast, roomSouth, roomWest) {
    this._roomNorth = roomNorth;
    this._roomEast = roomEast;
    this._roomSouth = roomSouth;
    this._roomWest = roomWest;
  }

  // Add item to room
  addItem(item) {
    this._items.push(item)
  }

  // Add enemy to room
  addEnemy(enemy) {
    this._enemies.push(enemy);
  }

  // Add player options
  addPlayerOptions(options) {
    this._options = options;
  }

  // Remove player option (when used)
  removePlayerOptions(option) {
    this._options.forEach(item => {
      if (item.text === option) {
        item.text = `<s>${item.text}</s>`;
      }
    });
  }

  // Return options in the room
  returnOptions() {
    return this._options;
  }

  // Return parameters of the room
  returnName() {
    return this._name
  }

  // Return description of the room
  returnDescription() {
    return this._description
  }

  // Return items in the room
  returnItems() {
    if (this._items.length > 0) {
      return this._items.map(item => item.name);
    } else {
      return 'no items in this room';
    }
  }

  // Return enemy in the room
  returnEnemy() {
    if (this._enemies.length > 0) {
      return {
        name: this._enemies[0].name,
        description: this._enemies[0].description
      };
    } else {
      return {
        name: 'no enemy',
        description: 'There is no enemy in this room.'
      };
    }
  }

}

//////////////////////// CHARACTER CLASS ////////////////////////
export class Character {
  constructor(name, health, inventory) {
    this._name = name;
    this._health = health;
    this._inventory = inventory;
  }

  takeDamage(amount) {
    this._health -= amount;
  }

  addItem(game, item) {
    this._inventory.push(item);
    console.log(this._inventory)
    game.setResponse(`You picked up ${item.name}.`)
  }

  fight(game, enemy) {
    console.log(`You attacked ${enemy._name} and defeated it.`)
    game.setResponse(`You attacked ${enemy._name} and defeated it.`);
  }
}

//////////////////////// ENEMY CLASS ////////////////////////
export class Enemy {
  constructor(name, description, dialogue) {
    this._name = name;
    this._description = description;
    this._dialogue = dialogue;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get dialogue() {
    return this._dialogue;
  }
}

//////////////////////// ITEM CLASS ////////////////////////
export class Item {
  constructor(name) {
    this.name = name;
  }
}