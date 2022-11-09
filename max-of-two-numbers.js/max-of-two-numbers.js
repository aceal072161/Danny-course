let number1 = prompt();
let number2 = prompt();

if (number1 > number2) {
  console.log(number1 + " " + "is larger than" + " " + number2);
} else if (number2 > number1) {
  console.log(number2 + " " + "is larger than" + " " + number1);
} else {
  console.log(number1 + " " + "and" + " " + number2 + " " + "are equal.");
}
