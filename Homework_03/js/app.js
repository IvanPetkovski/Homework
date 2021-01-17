//******************** Ex. 02  -  CONVERT CELSIUS TO FAHRENHEIT (AND VICE VERSA) *********************
// let cValue = prompt("Please enter a celsius value: ");
// let fahrenheit = cValue * 1.8 + 32;

// alert(`${cValue} degrees celsius is ${fahrenheit} degrees fahrenheit.`);

// // **************** Ex.02 - BONUS ******************
// let fValue = prompt("Please enter a fahrenheit value: ");
// let celsius = (5/9) * (fahrenheit-32);

// alert(`${fValue} degrees fahrenheit is ${celsius} degrees celsius.`);


//****************** Ex. 03  -  CALCULATE YOUR AGE ***********************
// function calculateAge (birthYear, currentYear) {
//     let result = currentYear - birthYear;
// return result;
// }

// alert(`You are ${calculateAge(1995, 2021)} years old.`);
// alert(`You are ${calculateAge(1963, 2021)} years old.`);
// alert(`You are ${calculateAge(2002, 2021)} years old.`);

//***************** Ex. 03 - BONUS ********************

// function calculateAge(age) { 
//     let diff_ms = Date.now() - age.getTime();
//     let ageDate = new Date(diff_ms); 

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
// alert(`You are ${calculateAge(new Date(1995, 03, 18))} years old.`);
// alert(`You are ${calculateAge(new Date(2002, 07, 21))} years old.`);
// alert(`You are ${calculateAge(new Date(1963, 11, 13))} years old.`);



// **************** Homework part I  -  ENTER PARAMETER, RETURN ITS TYPE ******************
console.log("========================= \n Homework part I \n=========================")
function detectDataType(parameter) {
	let dataTypes = [Number, String, Boolean, Object], i, len;

	if (typeof parameter === "number" || typeof parameter === "string" ||
		typeof parameter === "boolean" || typeof parameter === "object") {
		for (i = 0, len = dataTypes.length; i < len; i++) {
			if (parameter instanceof dataTypes[i]) {
				return dataTypes[i];
			}
		}
	}
	return typeof parameter;
}

console.log(`The value's type you've entered is - ${detectDataType(31)}`);
console.log(`The value's type you've entered is - ${detectDataType('Hakuna Matata')}`);
console.log(`The value's type you've entered is - ${detectDataType(true)}`);
console.log(`The value's type you've entered is - ${detectDataType(null)}`);
console.log(`The value's type you've entered is - ${detectDataType()}`);


// **************** Homework part II - DOG > HUMAN YEARS ******************
console.log("========================= \n Homework part II \n=========================")

function dogAge(ageValue) {
	let dogYears = 7 * ageValue;
	return dogYears;
}

console.log(`Your dog is ${dogAge(3)} years old in human years.`);

//******** Homework part II  -  BONUS ***********

function humanAge(ageValue) {
	let humanYears = ageValue / 7;
	return humanYears;
}

console.log(`If you were a dog, you would be ${humanAge(28)} years old.`);


// **************** Homework part III - ATM ******************

let currentBalance = 10000;

// ******* Select what the user wants to do ********
function chooseOption() {
	let atmOptions = parseInt(prompt(`Hello, what can we do for you today? \n 1. Check Balance \n 2. Withdrawal  \n 3. Exit`));
	if (atmOptions !== "" && atmOptions !== null && !isNaN(atmOptions)) {
		switch (atmOptions) {
			case 1:
				checkBalance();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				chooseOption();
		}
	} else {
		alert("Please make a valid selection");
		chooseOption();
	}
}
// ******* Checking Balance ********
function checkBalance() {
	alert(`You have $${currentBalance} left on your account`);
	toContinue();
}
// ******* Withdraw money & amount *********
function withdrawal() {
	let withdrawAmount = parseInt(prompt("Enter the amount you want to withdraw:"));
	if (withdrawAmount !== "" && withdrawAmount !== null && !isNaN(withdrawAmount)) {
		if (withdrawAmount <= currentBalance) {
			currentBalance -= withdrawAmount;
			alert("Transaction successful!");
			alert(`You have $${currentBalance} left on your account`);
			toContinue();
		} else {
			alert("You have insufficient funds!");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}
// ******** If user wants to continue using the ATM *********
function toContinue() {
	let yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
		if (yesOrNo === 2) {
			exit();
		}
		else {
			chooseOption();
		}
	}
	else {
		alert("Please make a valid selection");
		toContinue();
	}
}
// ****** Exit ATM ******
function exit() {
	alert("Please wait for your receipt, thank you.");

}
