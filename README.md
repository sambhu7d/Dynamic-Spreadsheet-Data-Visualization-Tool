# Dynamic Spreadsheet Data Visualization Tool
 This project involves a Google Apps Script-based web application that dynamically fetches data from a Google Spreadsheet based on user selections made through a URL query.
 Project Title: Dynamic Spreadsheet Data Visualization Tool

 Project Overview:
This project involves a Google Apps Script-based web application that dynamically fetches data from a Google Spreadsheet based on user selections made through a URL query. The primary function of this tool is to retrieve and display specific data ranges from a spreadsheet in a tabular format on a web page. This is particularly useful for visualizing and sharing spreadsheet data in a more accessible and user-friendly manner.

 Features:
1. URL Parameter Handling: Extracts parameters from the URL to determine user choices.
2. Spreadsheet Integration: Accesses data from a specific Google Spreadsheet based on provided IDs.
3. Dynamic Data Mapping: Utilizes a predefined mapping system to locate data in the spreadsheet based on user selections.
4. HTML Table Generation: Creates an HTML table dynamically populated with data from the spreadsheet.
5. Customizable Data Ranges: Allows for easy modification of data range mappings to accommodate different data sets.
6. Web-based Interface: Provides a user-friendly web interface to display the spreadsheet data.

 Technologies Used:
- Google Apps Script: Used for scripting the integration between the web interface and Google Sheets.
- Google Sheets: The source of the data.
- HTML: For structuring the output data in a web format.

 Functional Description:
1. The `doGet` function is triggered when the web app URL is accessed with specific parameters (`center` and `program`).
2. It fetches the corresponding data from a Google Sheet based on the URL parameters.
3. The script then maps these parameters to specific ranges in the spreadsheet and retrieves the relevant data.
4. The retrieved data is formatted into an HTML table, which is then displayed on the web page.

 Use Cases:
- Inventory Management: Ideal for organizations that want to visualize stock levels or inventory data from a spreadsheet on a web page.
- Event Management: Useful for displaying participant or schedule information dynamically for different events or sessions.
- Educational Institutions: Can be used to display course or classroom material requirements, schedules, or resources.

 Future Enhancements:
1. Interactive Web Interface: Implement a more interactive and user-friendly web interface with dropdowns or form inputs for selecting parameters.
2. Data Filtering and Sorting: Add features for users to filter and sort the displayed data on the web page.
3. User Authentication and Access Control: Integrate user authentication to control access to sensitive data.
4. Real-time Data Updates: Implement real-time data fetching to ensure the displayed information is always up-to-date.
5. Responsive Design: Ensure the web interface is responsive and accessible on various devices, including smartphones and tablets.

 Project Status:
- The project is currently functional with basic features to map selections to spreadsheet ranges and display them as HTML tables. Future updates are planned to enhance its capabilities and user interface.

This portfolio provides a comprehensive overview of the tool, outlining its core functionality, technology stack, and potential applications, demonstrating its utility in simplifying data visualization tasks.
