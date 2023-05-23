export class Game {
  constructor(player, rooms, startingRoomIndex = 0) {
    this._player = player;
    this._rooms = rooms;
    this._currentRoom = this._rooms[startingRoomIndex];
  }

  moveToRoom(direction) {
    const newRoom = this._currentRoom[`_room${direction}`];
    if (newRoom) {
      this._currentRoom = newRoom;
      newRoom.enter();
    } else {
      console.log(`You can't go ${direction} from here.`);
    }
  }


  // Get current room
  get currentRoom() {
    return this._currentRoom;
  }
}


export class Room {
  constructor(name, description) {
    this._name = name;
    this._description = description;
    this._items = [];
    this._enemies = [];
    this._options = []
  }

  enter() {
    // display the room's description, items, and enemies
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
    this._enemies.push(enemy)
  }

  // Add player options
  addPlayerOptions(options) {
    this._options = options;
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
    return this._items.map(item => item.name);
  }

  // Return enemy in the room
  returnEnemy() {
    return this._enemies.map(enemy => enemy.name);
  }
}

export class Character {
  constructor(name, health, inventory) {
    this._name = name;
    this._health = health;
    this._inventory = inventory;
  }

  takeDamage(amount) {
    this._health -= amount;
  }

  addItem(item) {
    this._inventory.push(item);
  }
}

export class Enemy {
  constructor(name, health, damage, dialogue) {
    this._name = name;
    this._health = health;
    this._damage = damage;
    this._dialogue = dialogue;
  }
}

export class Item {
  constructor(name) {
    this.name = name;
  }
}