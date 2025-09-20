const prompt = require("prompt-sync")();

let operations = ['+',`-`,`*`,`/`]

let x = Number(prompt('Enter Your first number: '));
let y = Number(prompt('Enter Your Second number: '));

console.log(`From the listed operation enter their index to perform that operation\n1. add\n2. sub\n3. mul\n4. div`);
let operator = Number(prompt("Enter the listed operations to perform: "))

let choice = operations[--operator];
let ans;
switch (choice){
    case "+":
        ans = x + y;
        break;
    case "-":
        ans = x - y;
        break;
    case "*":
        ans = x * y;
        break;
    case "/":
        ans = x / y;
        break;
}
console.log(`Answer: ${x} ${choice} ${y} = ${ans}`);
