function isFibonacciNumber(userNumber, nextNumber) {
  return userNumber == nextNumber
}

function fibonacci(userNumber) {
  let firstNumber = 0;
  let currentNumber = 1;
  let nextNumber = 1;
  
  for (let index = 0; index < userNumber; index++) {
    nextNumber = firstNumber + currentNumber;
    firstNumber = currentNumber;
    currentNumber = nextNumber;
    if (isFibonacciNumber(userNumber, nextNumber)) {
      console.log(`${userNumber} faz parte da sequência de fibonacci`);
      break;
    }
  }
}

fibonacci(55)