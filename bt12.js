let deposit = +prompt("Enter the amount of money you want to put into saving account: ");
let time = +prompt("Enter the number of months: ");
let a = deposit*(1+(0.043/12))^time;
alert(`Your saving account after ${time} months will be: ${a.toLocaleString()}`);
