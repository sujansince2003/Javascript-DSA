function getSum(num1, num2) {
  return num1 + num2;
}

console.log(getSum(1, 2));
console.log(getSum()); //NaN
console.log(getSum(1)); // give NaN
console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //return 3 : takes only first 2 parameters and ignore others but doesnot throw error
