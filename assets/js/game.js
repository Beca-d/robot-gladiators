// Create main character
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//Can log many values at once by console.log(playerName, playerAttack, playerHealth);

// Create first enemy
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack =12;

var fight = function () {
	// Alert players that they are starting the round
	window.alert ("welcome to Robot Gladiators!");
}

function fight () {
window.alert("The fight has begun");
}


  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.


fight();

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");


// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);