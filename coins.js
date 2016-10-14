

  

function coinCounter (input) {
	var coinPurse =  {};

var printout = document.getElementById("coins");


	coinPurse.quarters = Math.floor(input / 0.25);
	input -= coinPurse.quarters * 0.25;
	coinPurse.dimes = Math.floor(input / 0.10);
	input -= coinPurse.dimes * 0.10;
	coinPurse.nickels = Math.floor(input / 0.05);
	input -= coinPurse.nickels * 0.05;
	coinPurse.pennies = Math.floor(input / 0.01);

	return coinPurse;
printout.innerHTML += "<p>" + coinPurse + "</p>";
	  console.log(coinPurse);
}


// why is this not printing to the webpage




