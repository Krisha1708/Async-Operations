function calculate(num1, num2){
  // callbcak function for addition
  function add(a, b){
    return a + b;
  }

  // Callback function for multipily
  function mutiply(a, b){
    return a * b;
  }

  //Operation function that takes a callback
  function operation(num1, num2, callBack){
    return callBack(num1, num2); // calls the callback with num1 & num2
  }

  // Perform addition using the add callback
  let additionResult = operation(num1, num2, add);
  console.log(`Addition Result: ${additionResult}`);

  // Perform multiply using the multiply callback
  let multiplyResult = opertion(num1, num2, multiply);
  console.log(`Multiply Result: ${multiplyResult}`);

}

// Test the calculate function with 5 & 3
calculate(4,7);
