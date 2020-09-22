// Import the Data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.celect("tbody");
// Simple JavaScriptmconsole.log statment
function printHello() {
    console.log("Hello there!");
}

// Original addition function
function addition (a, b) {
    return a + b;
}
// Convert the above functon to an Arrow function
addition = (a + b) => a + b;

// Original doubleAddition function
function doubleAddition (c, d) {
    var total = addition(c, d) * 2;
    return total;
}
// Convert the above functon to an Arrow function
doubleAddition = (c, d) => addition(c, d) * 2;

// Creating new function to built a table to disply UFO sightinigs
function buildTable(data) {
// Clear out any existing dat
tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the to the table body
    let row = tbody.append("tr");
    // Loop throught each field in the datRow and 
    // add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
}