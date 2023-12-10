// Import the filesystem module
const fs = require('fs');

// Import the path module
const path = require('path');

// Get the directory path from command-line arguments
const directoryPath = process.argv[2];

// Get the file extension filter from command-line arguments
const fileExtensionFilter = process.argv[3];

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log(err);

      }
        // Add a dot to the extension filter
    const filteredExtension = '.' + fileExtensionFilter;

          // Iterate through each file in the directory
    files.forEach(file => {
                // Check if the file extension matches the filteredExtension
        if (path.extname(file) === filteredExtension) {
            console.log(file);
        }
    });

    
    
});