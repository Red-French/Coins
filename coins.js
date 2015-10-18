
/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. 
Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 
Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/
var amount;

var quarter = .25;
var dime = .1;
var nickel = .05;
var penny = .01;

var quarters_total;
var dimes_total;
var nickels_total;
var pennies_total;

var output = document.getElementById("content");

function coinCounter (amount) { 
console.log("amount: ", amount);
	var coinPurse = { 		// Initialize a JavaScript object to hold the coins var coinPurse = {};
		num_quarters: 0,
		num_dimes: 0,
		num_nickels: 0,
		num_pennies: 0
	};
	num_quarters = amount / quarter; // quarter calc
	num_quarters = parseInt(num_quarters); // get rid of remainder
	amount = amount % quarter; // amount remaining after quarters
	amount = amount.toFixed(2); // keep to 2 decimal points
	console.log("remaining after quarters", amount) // amount remaining after quarters

	num_dimes = amount / dime; // dime calc
	num_dimes = parseInt(num_dimes); // get rid of remainder
	amount = amount % dime; // amount remaining after dimes
	amount = amount.toFixed(2); // keep to 2 decimal points
	console.log("remaining after dimes", amount) // amount remaining after dimes

	num_nickels = amount / nickel; // nickel calc
	num_nickels = parseInt(num_nickels); // get rid of remainder
	amount = amount % nickel; // amount remaining after nickels
	amount = amount.toFixed(2); // keep to 2 decimal points
	console.log("remaining after nickels", amount) // amount remaining after nickels

	num_pennies = amount / penny; // penny calc
	num_pennies = parseInt(num_pennies); // get rid of remainder
	amount = amount % penny; // amount remaining after pennies
	amount = amount.toFixed(2); // keep to 2 decimal points
	console.log("remaining after pennies", amount) // amount remaining after pennies

	quarters_total = num_quarters * quarter; // total $ in quarters
	dimes_total = num_dimes * dime; // total $ in dimes
	nickels_total = num_nickels * nickel; // total $ in nickels
	pennies_total = num_pennies * penny; // total $ in pennies

	quarters_total = quarters_total.toFixed(2); // ensure 2 decimal points
	dimes_total = dimes_total.toFixed(2); // ensure 2 decimal points

// coinPurse.quarters = 0;
}

// var coins = coinCounter();

amount = prompt("How much you got?");
coinCounter(amount); // call coin calc function

output.innerHTML = 
"$" + amount + " equals:" + "<p>" + 
"<br>" + "Quarters: " + num_quarters + " = $" + quarters_total + 
"<br>" + "Dimes: " + num_dimes + " = $" + dimes_total + 
"<br>" + "Nickels: " + num_nickels + " = $" + nickels_total + 
"<br>" + "Pennies: " + num_pennies + " = $" + pennies_total + "</p>";
