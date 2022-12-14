/********************************************************************
  TODO 1 COMPLETE: Practice changing the case of strings
    - With the first letter of every word capitalized, it makes it too easy to play. When scrambled the word should either be all upper or lower case 
    - HINT: the variable that hold the word that will be scrambled is called "selectedWord"

  TODO 2 COMPLETE: JS is case sensitive. -- Remember how I showed  "ken" and "Ken" are not the same.
    - When checking your answer, the comparision is case sensitive. You should make sure that the cases are the same.
    - To do this, locate where the code is COMPARING the selected word to the value in the form field and set them BOTH to either upper or lower case

  TODO 3 TRIM INSERTED BUT NOT WORKING: Clean up the user input. This is an important step in every script that processes user submitted data.
   - Sometimes users accidently add a space to the end of their words so while they mean to submit the string "pumpkin" they actually submit "pumpkin " -- not the space at the end.
   - Go to the online docs, under strings and look up the .trim() function. 

  TODO 4 COMPLETE: Right now you have to reload the page each time. That means the game really can't keep score. Alter the code so that when the player successfully unscrambles a word the game will call the nextWord function.  
    - Move the variable allWords into the nextWord() function
    - Move the code that picks a random word into the nextWord() function
    - Move the code that writes a scrambled word to screen into the nextWord() function

  TODO 4b COMPLETE: Calling nextWord 
    - Now that we moved the code that selects the next word into a function. We have to call that function in two locations:  
      - Call the function nextWord() when the page loads. To do this, uncomment the nextWord() function call at the bottom of this script. 
      - We also want to call nextWord() when the user successfully unscrambles a word.  So call the nextWord() function in the code where you think it checks if the users answer was correct. 
  
  
  --- Now that we dont have to reload the page to get a new word, we can actually build a game --- 
  
  TODO 5 COMPLETE: 
    - We need to keep track of successfully unscrambled words.  There's a DIV in the HTML called "unscrambled", we need to populate it with the words when they are unscrambled.
    - This is how you SET/GET the HTML of the "unscrambled" div:  document.getElementById("unscrambled").innerHTML="";
    - Think back to class when I showed you how we can add strings together.  That is what you want to do here.  You want to combine the existing string value of the "unscrambled" div with the string value of the unscrambled word. 
    
  TODO 6 COMPLETE: The game should end when the user unscrambles a word incorrectly
    - Create a new variable to track if the game is over. (what type should that be, number, string, bool?)
    - Initialize that new variable by setting it to false when the page loads
    - You should set that variable to true if the user gives up or fails to unscramble a word. 
    - HINT Look in the CHECK function, there is a conditional that checks IF the word is correct. Now you need to add an ELSE and in that else condition we want to:

  TODO 7 COMPLETE:
    - We should give the player some sort of message when the game is over and maybe include how many words they successfully unscrambled. Something like:
      - Game Over! You unscrabled __ words!

  TODO 8 STYLING INSERTED BUT NOT SHOWING UP:
    - The UI is BORING! It needs styling and images 
*********************************************************************/


// Our master array of Halloween words
const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];
let selectedWord = "Bats";
let gameOver = false;
let unscrambledCounter = 0;





function nextWord() {
  //Select a random word from the "words" array and assign it to a variable called "selectedWord";
  selectedWord = allWords[Math.floor(Math.random() * (allWords.length - 1))].toUpperCase();

  //Scramble the selectedWord and display it inside of a div
  document.getElementById("scrambledWord").innerHTML = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

//A function that gets called when the user clicks on the Check button. 
function check() {
  if (gameOver) { alert("Sorry the game is over. Refresh to play again."); return false; }

  if (selectedWord === document.getElementById("myWord").value.toUpperCase().trim()) {
    alert("YES!");
    document.getElementById("unscrambled").innerHTML += `<div>${selectedWord}</div>`;
    document.getElementById("myWord").value = "";
    unscrambledCounter++;
    nextWord();
  } else {
    alert("WRONG!");
    giveUp();
  }
}

//A function that gets called when the user clicks on the Give Up button.
function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  gameOver = true;
  alert("Game Over! You unscrambled " + unscrambledCounter + " words");
}

nextWord()