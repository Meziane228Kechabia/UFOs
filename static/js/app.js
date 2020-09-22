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
// Creating function to filter date
function handleClick(){
    d3.selectAll("#filter-btn").on("click", handleClick);
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").proprety("value");
    let filteredData = tableData;

    // Check to see if a date was enterd and filter the data using that date
    if (date) {
        // apply 'filter' to the table date to only keep the rows
        //where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // @ Note: if no date was entered, then filteredData will just
    // be the original tableData
    buildTable(filteredData);
    // Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);
    // Build the table when the page loads
    buildTable(tableData);
};