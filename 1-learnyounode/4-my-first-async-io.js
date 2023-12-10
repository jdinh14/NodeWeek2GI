
// Import the filesystem module
const fs = require('fs');
// Get the file path from command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
// Specify the encoding in which the file's content should be read.
// If you don't specify an encoding, the file's content will be returned as a Buffer object.
// Specifying 'utf8' ensures that the content will be returned as a string.
fs.readFile(filePath, 'utf8', (err, data) => {
  // Check for errors
  if (err) {
    return console.error(err);}

  // Count the number of newlines
  const numberOfNewlines = data.split('\n').length - 1;

  // Print the number of newlines
  console.log(numberOfNewlines);
});

