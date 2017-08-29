//Create global functions to count the numberOfTurns
let numberOfTurns = 0;
let innerTurns = 0;
//user inputs the word into a prompt
function wordInput() {
	let secretWord = prompt("Player One, enter in your word:", "Your Secret Word");
  	console.log(secretWord);
//Display items onto page based on the length of the word
	for (var i = 0; i < secretWord.length; i++) {
    	let node = document.createElement('li');
    	document.getElementById('word-list').appendChild(node);
	}
  let list = document.getElementsByTagName('li');
//Calculate the length of the word
  let lengthOfSecretWord = secretWord.length
  console.log("lengthOfSecretWord = " + lengthOfSecretWord);
  let lettersCorrect = 0;
//When a user selects a button 
$(document).ready(function(){
	$('.letter').click(function(){
//We loop through the secretWord
	let letterSelected = $(this).text().toLowerCase(); 
	let foundAMatch = false;
	$(this).attr("disabled", true);

	for (let i = 0; i < lengthOfSecretWord; i++) {
		//and if the letterSelected is in the secretWord
		if (letterSelected === secretWord[i]) {
			foundAMatch = true;
			console.log(true);
			$('ul').css("visibility", "visible");
			$(list[i]).append(secretWord[i].toUpperCase());
		} 
		
	}
		if (foundAMatch === true) {
			numberOfTurns += 0;
			lettersCorrect += 1;
			console.log("lettersCorrect = " + lettersCorrect);
		} else {
			$('#wrong').append(letterSelected);
			numberOfTurns += 1;

	}
	console.log("numberOfTurns = " + numberOfTurns);
	$('#total').text(numberOfTurns);
	if (numberOfTurns === 1) {
		$('#trump').css("visibility", "visible");
	} else if (numberOfTurns === 2) {
		$('#stick-body').css("visibility", "visible");
	} else if (numberOfTurns === 3) {
		$('#stick-arm').css("visibility", "visible");
	} else if (numberOfTurns === 4) {
		$('#stick-arm-1').css("visibility", "visible");
	} else if (numberOfTurns === 5) {
		$('#stick-leg').css("visibility", "visible");
	} else if (numberOfTurns === 6) {
		$('#stick-leg-1').css("visibility", "visible");
	}
	console.log("lettersCorrect = " + lettersCorrect);
	console.log("lengthOfSecretWord at the end of the function = " + lengthOfSecretWord)
	if (numberOfTurns >= 6) {
		alert('you loser!');
		}
	if (lettersCorrect >= lengthOfSecretWord) {
		alert('you win!');
	}		
	})
});
}

wordInput();