let input = +prompt("Enter a number: ");
let message = Number.isInteger(Math.sqrt(input)) ? `${input} is a perfect square` : `${input} is not a perfect square`;
alert(message);