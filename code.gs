function doGet(e) {
  // Get the parameters from the URL
  var center = e.parameter.center; 
  var program = e.parameter.program; 

  // Replace with your actual Spreadsheet ID
  var spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  var sheet = spreadsheet.getSheetByName('Stocks'); // Replace with your sheet name

  // Define the mapping of selections to data ranges
  var ranges = {
    // Use generic names for centers and programs
    'Center1': {
      'Program1': 'RANGE1',
      'Program2': 'RANGE2',
      // ... other programs
    },
    'Center2': {
      'Program1': 'RANGE3',
      'Program2': 'RANGE4',
      // ... other programs
    },
    // ... additional centers
  };

  // Fetch the specific column data based on the program
  var columnData = [];
  switch (program) {
    case 'Program1':
      // Replace with the actual range for Program1
      columnData = sheet.getRange('RANGE_FOR_PROGRAM1').getValues();
      break;
    case 'Program2':
      // Replace with the actual range for Program2
      columnData = sheet.getRange('RANGE_FOR_PROGRAM2').getValues();
      break;
    // Add more cases as needed
  }

  // Determine the range to use based on the selections
  var selectedRange = ranges[center] && ranges[center][program];
  if (!selectedRange) {
    return HtmlService.createHtmlOutput('No data available for the selected options.');
  }

  // Get data from the determined range
  var dataRange = sheet.getRange(selectedRange);
  var data = dataRange.getValues();

  // Table Title
  var tableTitle = center + ' Material Stock for ' + program;

  // Create only the HTML table
  var tableHTML = '<table border="1">';
  tableHTML += '<caption>' + tableTitle + '</caption>';
  tableHTML += '<tr><th>Material | Requirements</th><th>Existing Stock</th><th>Requirement Estimate</th></tr>';

  // Iterate over the data to create table rows
  for (var i = 0; i < data.length; i++) {
    tableHTML += '<tr>';
    var rowTitle = (i < columnData.length) ? columnData[i][0] : '';
    tableHTML += '<th>' + rowTitle + '</th>';

    for (var j = 0; j < data[i].length; j++) {
      tableHTML += '<td>' + data[i][j] + '</td>';
    }
    tableHTML += '</tr>';
  }
  tableHTML += '</table>';

  // Evaluate the template and return it
  var htmlTemplate = HtmlService.createTemplateFromFile('DataDisplay.html');
  htmlTemplate.dataTable = tableHTML;
  return htmlTemplate.evaluate();
}
