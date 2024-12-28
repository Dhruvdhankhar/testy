// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const promt = require("prompt-sync")(); // () because 'require("prompt-sync")' returns a function not object promt

//1. func for deposit
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

//2. func to select no. of line to bet on (1-3)

const getNumberOfLine = () => {
    while(true){ 
    const line = promt("Enter the no. of line to bet on (1-3): ");
    const numberOfLines = parseFloat(line); 
    
    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
        console.log("Invalid number");   
    }
    else {
        return numberOfLines; 
    } 
}
}

//3. func to collect he bet amount

const getBetAmount = (balance , numberOfLines) => {  // (parameters)=> is the function is required other func parameters
    while(true){ 
    const betAmount = promt("Enter the amount of bet per line: ");
    const numberBetAmount = parseFloat(betAmount); 
    
    if(isNaN(numberBetAmount) || numberBetAmount <= 0 || numberBetAmount > (balance / numberOfLines)){
        console.log("Invalid Bet Amount");   
    }
    else {
        return numberBetAmount; 
    } 
}
}
  
// 4. func to spin the slot mac

let balance = deposit();  // is doesn't matter the sequence in which i write code it matter how i called this function.
const numberOfLines = getNumberOfLine();
const betAmount = getBetAmount(balance , numberOfLines); // bet is on number of line, for $50 balance, and no. of line to bet is 2 then max 25 can be bet on each line(balance/lines)

