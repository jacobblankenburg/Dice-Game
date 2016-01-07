"use strict";
function getRandomNum () {
	var rand;
	rand = Math.floor((Math.random() * 10) + 2);  
	return rand;
}

function roll() {
	var roll;
	roll = 0;
	while (roll === 0 || roll === 1) {
		roll = getRandomNum();
	}
	return roll;
}

function setScore(thisScore, roll) {
	var thisScore;
	if (roll === 2) {
		thisScore = 0;
	}else if (roll === 7) {
		thisScore -= 7;
	}else {
		thisScore += roll;
	}
	return thisScore;
}

function showHide(button1, button2) {
	if (button1.style.display === "block") {
		button1.style.display = "none";
	}else if (button1.style.display === "none") {
		button1.style.display = "block";
	}if (button2.style.display === "block") {
		button2.style.display = "none";
	}else if (button2.style.display === "none") {
		button2.style.display = "block";
	}
}

function reloadPage () {
	location.reload();
}

function checkWin(player, playerScore){
	if (playerScore >= 25) {
		alert(player + " Wins!!!");
		reloadPage();
	}
}

function displayCurrentRoll (playerRow, thisRoll) {
	document.getElementById(playerRow).innerHTML= thisRoll;
}

function displayScore (player, score){
	document.getElementById(player).innerHTML= score;
}

function userName (player) {
	var name;
	name = prompt("What is " + player + " player name?");
	if (name === "") {
		name = userName(player);
	}
	return name;
}

function setPlayer(locale, player){
	document.getElementById(locale).innerHTML= player;
}

function main (){
	var button1;
	var button2;
	var thisRoll;
	var player1Score;
	var player2Score;
	var player1;
	var player2;
	
	button1 = document.getElementById("button1");
	button2 = document.getElementById("button2");
	button2.style.display = "none";
	button1.style.display = "block";
	player1 = userName ("first");
	player2 = userName ("second");
	player1Score = 0;
	player2Score = 0;
	thisRoll = 0;

	setPlayer("player1Name", player1);
	setPlayer("player2Name", player2);

	button1.onclick= function (){
		thisRoll = roll();
		displayCurrentRoll("player1Roll", thisRoll);
		showHide(button1, button2);
		player1Score = setScore(player1Score, thisRoll);
		displayScore("p1score", player1Score);
		checkWin(player1, player1Score);
	}

	button2.onclick= function (){
		thisRoll = roll();
		displayCurrentRoll("player2Roll", thisRoll);
		showHide(button1, button2);
		player2Score = setScore(player2Score, thisRoll);
		displayScore("p2score", player2Score);
		checkWin(player2, player2Score);
	}
}

main();