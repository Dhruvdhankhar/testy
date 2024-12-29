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

    const reels = [];
  for (let i = 0; i < COLS; i++) {  // The outer loop runs for each column (COLS).
    reels.push([]);  // An empty array is pushed into reels for each column.
    const reelSymbols = [...symbols];  //  A copy of the symbols array is made and stored in reelSymbols.
    for (let j = 0; j < ROWS; j++) {  // The inner loop runs for each row (ROWS):
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];  //The symbol at the random index is selected.
      reels[i].push(selectedSymbol);  //The selected symbol is pushed into the current reel.
      reelSymbols.splice(randomIndex, 1);  //The selected symbol is removed from reelSymbols to avoid duplicates in the same reel.
    }
  }

  return reels;
};


const transpose = (reels) => {
    const rows = [];
  
    for (let i = 0; i < ROWS; i++) {
      rows.push([]);
      for (let j = 0; j < COLS; j++) {
        rows[i].push(reels[j][i]); //The symbol at position [j][i] in reels is pushed into the current row in rows. This effectively transposes the columns into rows
      }
    }
  
    return rows;
  };



  const printRows = (rows) => {
    for (const row of rows) {   // A for...of loop iterates over each row in the rows array.
     //  This loop goes through each row one by one.
      let rowString = "";  // An empty string rowString is created to build the string representation of the current row.
      for (const [i, symbol] of row.entries()) {  //row.entries() provides both the index and the symbol for each element in the row.
        rowString += symbol;  // This adds the current symbol to the string.
        if (i != row.length - 1) {
          rowString += " | ";
        }  // This adds a separator between symbols, but only if it's not the last symbol in the row.
      }
      console.log(rowString);
    }
  };


  const getWinnings = (rows, bet, lines) => {
    let winnings = 0;  // A variable winnings is initialized to 0. This will keep track of the total winnings.
  
    for (let row = 0; row < lines; row++) {  //The outer loop runs for each row up to the number of lines.
      const symbols = rows[row];  // The symbols in the current row are stored in the symbols array.
      let allSame = true;  //to check if all symbols in the row are the same.
  
      for (const symbol of symbols) {  //The for...of loop iterates over each symbol in the symbols array.
        if (symbol != symbols[0]) {
          allSame = false;
          break;  //If the current symbol is not the same as the first symbol in the row, allSame is set to false and the loop breaks.
        }
      }
  
      if (allSame) {
        winnings += bet * SYMBOL_VALUES[symbols[0]];
      }
    } // if still true The winnings are increased by the bet amount multiplied by the value of the symbol (using the SYMBOL_VALUES object).
  
    return winnings;
  };


  const game = () => {
    let balance = deposit();
    
    while (true) {
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;  // The total bet amount (bet per line multiplied by the number of lines) is subtracted from the user's balance.
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings; // The user's balance is increased by the amount of their winnings.
        console.log("You won, $" + winnings.toString());
    
        if (balance <= 0) {
          console.log("You ran out of money!");
          break;
        }
    
        const playAgain = prompt("Do you want to play again (y/n)? ");
    
        if (playAgain != "y") break;
      }
    };
    
    game();