// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Select the submit button
var submit = d3.select("#filter-btn");

// function to run when 'filter table' button is clicked
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  //   clear out the table each time to show only current input date 
  tbody.selectAll('td').remove();
  tbody.selectAll('tr').remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);  
    // filter out only specific date as indicated from input field 
  var filteredData = tableData.filter(siting => siting.datetime === inputValue);

  console.log(filteredData);

  
  // appending to the table 
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});