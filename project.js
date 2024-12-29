// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();
// This line imports the prompt-sync module, which allows the program to take input from the user in the terminal.
const ROWS = 3;
const COLS = 3;
// These constants define the number of rows and columns in the slot machine.


const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
// This object defines how many of each symbol (A, B, C, D) are available in the slot machine. there can be only 2 A's in a reel out of 3


const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};
//This object defines the value of each symbol. For example, symbol A is worth 5 units.


const deposit = () => {
    while (true) {
      const depositAmount = prompt("Enter a deposit amount: ");
      const numberDepositAmount = parseFloat(depositAmount);     //parseFloat(depositAmount): This converts the input string into a floating-point number.
  // This function prompts the user to enter a deposit amount. It uses a while (true) loop to keep asking for input until a valid amount is entered.
  
      if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
      } else {
        return numberDepositAmount;
      }
    }
  };


  const getNumberOfLines = () => {
    while (true) {
      const lines = prompt("Enter the number of lines to bet on (1-3): ");
      const numberOfLines = parseFloat(lines);
  
      if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log("Invalid number of lines, try again.");
      } else {
        return numberOfLines;
      }
    }
  };// asking the user to enter the no. of line to bet on.



  const getBet = (balance, lines) => {
    while (true) {
      const bet = prompt("Enter the bet per line: ");
      const numberBet = parseFloat(bet);
  
      if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet, try again.");
      } else {
        return numberBet;
      }
    }
  };  
  // function to prompt the user for the bet amount per line.
  // Example usage
  // const balance = deposit();
  // const numberOfLines = getNumberOfLines();
  // const bet = getBet(balance, numberOfLines);
  // console.log(`You have deposited ${balance}, betting on ${numberOfLines} lines with a bet of ${bet} per line.`);


  const spin = () => {
    const symbols = [];   // An empty array is created to hold all the symbols.
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) { //iterates over each symbol and its count from the SYMBOLS_COUNT object.
      for (let i = 0; i < count; i++) {
        symbols.push(symbol);  //// It pushes each symbol into the symbols array according to its count.
      }
    }  
    // For example, if A has a count of 2, A will be pushed twice into the symbols array.