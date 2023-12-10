// Import the filesystem module
const fs = require('fs');

// Get the file path from command-line arguments
const filePath = 'planets.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    // Check for errors
    if (err) {
      return console.error(err);}

      
const planets = data.split(', '); 
planets.forEach(planet => {
  console.log(planet);
});

    
    

    });