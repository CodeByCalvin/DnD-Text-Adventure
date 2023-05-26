import { Game, Character } from './classes.js';
import { allRooms } from './objects.js';

const displayText = document.getElementById("displaytext");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

// TEST GAME
let player = new Character('Player Name', 100, []);
let game = new Game(player, allRooms);

// Displays the current room and text to the user
function updateUI() {
  function displayRoom() {
    let roomName = game.currentRoom.returnName();
    let roomDescription = game.currentRoom.returnDescription();
    let roomItems = game.currentRoom.returnItems();
    let roomEnemy = game.currentRoom.returnEnemy();

    displayText.innerHTML = `You are in the ${roomName}. ${roomDescription}. You see ${roomItems}. There is ${roomEnemy.description}.`;

  }
  displayRoom();

  function displayOptions() {

    // Clear old options
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";

    // Get the options from the current room
    let roomOptions = game.currentRoom.returnOptions();

    // Set new options
    if (roomOptions[0]) option1.innerHTML = "1. " + roomOptions[0].text;
    if (roomOptions[1]) option2.innerHTML = "2. " + roomOptions[1].text;
    if (roomOptions[2]) option3.innerHTML = "3. " + roomOptions[2].text;
    if (roomOptions[3]) option4.innerHTML = "4. " + roomOptions[3].text;

  }
  displayOptions();

}

updateUI();

// Handles the user input and runs the selected option (1, 2, 3, 4)
function userInput() {
  let inputField = document.getElementById('userInput');

  inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      // Stops the page from reloading on enter
      event.preventDefault();

      // Get the user input and clear the input field
      let userInput = inputField.value;
      inputField.value = '';
      userInput = Number(userInput);

      // Get the options from the current room
      let roomOptions = game.currentRoom.returnOptions();

      // Find the selected option based on input value.
      let selectedOption = roomOptions.find(option => option.input === userInput);

      // Check if the selected option exists (if it is 1, 2, 3, 4)
      if (selectedOption && !selectedOption.text.includes("<s>")) {
        // Execute the selected option's action and pass the game object.
        selectedOption.action(game);

        // Update the UI after performing the action.
        updateUI();

      } else {
        console.error("Invalid input. Please enter a valid option number.");
      }
    }
  });
}

userInput();


