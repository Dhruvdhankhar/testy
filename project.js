// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const promt = require("prompt-sync")(); // () because 'require("prompt-sync")' returns a function not object promt

const deposit = () => {
    while(true){ // this is a loop, after entering invalid deposit func doesn't end and ask until valid deposit
    const depositAmount = promt("Enter the amount: ");
    const numberDepositAmount = parseFloat(depositAmount); // parseFloat converts sting into floating point number(as it is)
    // to prevent user from entering invalid no.
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit");   
    }
    else {
        return numberDepositAmount; 
    } 
}
}
deposit();
