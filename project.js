// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const promt = require("prompt-sync")(); // () because 'require("prompt-sync")' returns a function not object promt
// first libraries on top --> global variables --> classes and function --> mainline or other aspects of code

//global variables

const ROWS = 3; // typical practice to name global varibale in capital
const COLOUMS = 3;

const SYMBOL_COUNT = {          // SYMBOL COUNT in the a ROW
    A : 2,         
    B : 4,
    C : 6,
    D : 8,
}
const SYMBOL_VALUE = {
    A : 5,         //multipier, if get A then 5x, B then 4x
    B : 4,
    C : 3,
    D : 2,
}

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

const spin = ()=> {                  // picking all the arrays in a reel
   const symbols = [];
   for(const[symbol , count] of Object.entries(SYMBOL_COUNT)){
    for(let i = 0; i < count; i++){
        symbols.push(symbol)
    }
   }                               // point of doing this is that we can now call a random array from func spin 

   const reel = [[], [], []]  // nested array is a coloum
   for(let i = 0; i<COLOUMS; i++){   // started the loop to fill each colom 1 by 1, with all the array from spin();
    //reel.push([]);  use if there are more or less coloum/ nested array require in reel
    const newSymbol = [...symbols]   // copy from symbols[], because for each reel we have to delete a array which is used but not for other coloum
    for(let j=0; j<ROWS; j++){           
        const randomIndex = Math.floor(Math.random() * newSymbol.length)
        const selectedSymbol = newSymbol[randomIndex]
        reel[i].push(selectedSymbol);        // array get pushed at i'th position into reel from selectedSymbol
        newSymbol.splice(randomIndex , 1);     // delete the selected symbol.
    }
   }
console.log(reel);
};  

//5. check if user win

let balance = deposit();  // is doesn't matter the sequence in which i write code it matter how i called this function.
const numberOfLines = getNumberOfLine();
const betAmount = getBetAmount(balance , numberOfLines); // bet is on number of line, for $50 balance, and no. of line to bet is 2 then max 25 can be bet on each line(balance/lines)
const reel = spin();
