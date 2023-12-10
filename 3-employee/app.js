const express = require('express'); //import express module
const app = express(); //create express app
const port = 3000; //set port
const fs = require('fs');

//employee list 
const employees = [
    {
        "employeeID": 1,
        "name": "Jerry Dinh",
        "salary": 50000,
        "department": "Facilities Management"
    },
    {
        "employeeID": 2,
        "name": "Dennis Chung",
        "salary": 70000,
        "department": "Software Development"
    },
    {
        "employeeID": 3,
        "name": "Melvin Brown",
        "salary": 65000,
        "department": "IT Support"
    },
    {
        "employeeID": 4,
        "name": "Jesse Martinez",
        "salary": 72000,
        "department": "Human Resources"
    },
    {
        "employeeID": 5,
        "name": "Erick Hsu",
        "salary": 68000,
        "department": "Marketing"
    },
    {
        "employeeID": 6,
        "name": "Dwayne Johnson",
        "salary": 75000,
        "department": "Product Management"
    },
    {
        "employeeID": 7,
        "name": "John Cena",
        "salary": 71000,
        "department": "Finance"
    },
    {
        "employeeID": 8,
        "name": "Maris Marhelis",
        "salary": 69000,
        "department": "Sales"
    },
    {
        "employeeID": 9,
        "name": "Vinsmoke Benji",
        "salary": 60000,
        "department": "Customer Service"
    },
    {
        "employeeID": 10,
        "name": "Oscar Silva",
        "salary": 64000,
        "department": "Research and Development"
    }
];

// Route to get all employees
// Define a route to handle GET requests for '/employees'
// Route will respond with a JSON array of all employees
app.get('/employees', (req, res) => {
    res.json(employees); //takes the array, convert it into a JSON string
});

//  Route to handle GET requests for a specific employee by employeeID
// '/employees/:employeeID' is a dynamic route that can handle any employeeID
app.get('/employees/:employeeID', (req, res) => {

    // Extract the employeeID from parameters and convert (parse string) it to an integer
    const employeeID = parseInt(req.params.employeeID);

    // Find the employee with the matching employeeID
    // emp = element in array, 
    //function checks if empployeeID propery of the current emp.employeeID matches
    // variable from req parameters
    const employee = employees.find(emp => emp.employeeID === employeeID);

    if (!employee) {
        return res.status(404).send('Employee not found');
    }

    res.json(employee);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


