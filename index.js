const number = 6;
const result = number % 4; // 2
// Even numbers are those numbers that are exactly divisible by 2
// When % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.

function isNumEven() {
  const number = prompt("Enter a number: ");

  //check if the number is even
  if(number % 2 == 0) {
      console.log("The number is even.");
  }

  // if the number is odd
  else {
      console.log("The number is odd.");
  }
}

// second way ===> cleaner
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

