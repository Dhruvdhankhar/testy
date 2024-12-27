// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const promt = require("prompt-sync")(); // () because 'require("prompt-sync")' returns a function not object promt

const deposit = () => {
    const depositAmount = promt("Enter the amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    // to prevent user from entering invalid no.
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid number");   
    }
}
deposit();
