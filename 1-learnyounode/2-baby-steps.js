// Initialize a variable 'sum' to hold the cumulative total of the numbers
let sum = 0;

// Loop through each command-line argument starting from the third one (index 2).
// The first argument is the path to the Node.js executable,
// and the second is the path to the running script.
for (let i = 2; i < process.argv.length; i++) {
  // Add the current argument to the 'sum' after converting it to a number.
  // process.argv[i] is a string, so it's converted to a Number type.
  sum += Number(process.argv[i]);
}

console.log(sum);