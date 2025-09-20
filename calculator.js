const prompt = require("prompt-sync")();

let operations = ['+',`-`,`*`,`/`];


function checkXandY(x,y){
    let whichVar;

    if((isNaN(x) && (whichVar = 'X')) || (isNaN(y) && (whichVar = 'Y'))){
        throw new Error(`${whichVar} is not a Number`);
    }
}


function Divide(x,y){
    if(y === 0){
        throw new Error(`Division Error: Denominator cannot be 0`)
    }

    return x / y;
}
let user = true;

while(user){

    try{

        let x = Number(prompt('Enter Your first number: '));
        let y = Number(prompt('Enter Your Second number: '));

        checkXandY(x, y);

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
                ans = Divide(x,y);
                break;
            default:
                throw new Error("Invalid Operator Choice");
        }

        console.log(`Answer: ${x} ${choice} ${y} = ${ans}`);

    }catch(err){
        console.error(err.toString())
    }
    finally{
        console.log("Calculator Completed.")
        user = prompt("Do you wish to continue (y/n): ").toLowerCase() === "y"
        console.log(`\n`.repeat(100));
    }
}
