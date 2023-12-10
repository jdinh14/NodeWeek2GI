// Include the File System module from Node.js core library
const fs = require('fs');

// Retrieve the file path from the command-line arguments.
// process.argv[2] refers to the 3rd command-line argument, array starts at index 0.
const filePath = process.argv[2];

// Read the file content synchronously and store it in a Buffer object.
// This approach is used when the file's text encoding is unknown or when working with binary data.
const fileContentBuffer = fs.readFileSync(filePath);

// Convert the Buffer object to a string using the toString() method.
// Then split the string by newline ('\n') characters to create an array of lines.
// The length of this array, minus 1, gives the number of newline characters in the file.
// Subtracting 1 is necessary because the last line of the file does not end with a newline character.
const newlinesCount = fileContentBuffer.toString().split('\n').length - 1;

// Output the count of newline characters to the console.
console.log(newlinesCount);
