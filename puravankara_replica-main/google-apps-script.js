/**
 * Google Apps Script - Form Submission Handler
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code
 * 4. Paste this entire script
 * 5. Save the project (Ctrl+S or Cmd+S)
 * 6. Click "Deploy" > "New deployment"
 * 7. Select type: "Web app"
 * 8. Set Execute as: "Me"
 * 9. Set Who has access: "Anyone"
 * 10. Click "Deploy"
 * 11. Copy the Web App URL and use it in your JavaScript code
 * 
 * IMPORTANT: Make sure your Google Sheet has these columns in Sheet1:
 * - Column A: Name
 * - Column B: Phone
 * - Column C: Email
 */

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    
    // If Sheet1 doesn't exist, create it
    if (!sheet) {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const newSheet = ss.insertSheet('Sheet1');
      // Add headers if sheet is empty
      if (newSheet.getLastRow() === 0) {
        newSheet.getRange(1, 1, 1, 3).setValues([['Name', 'Phone', 'Email']]);
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Sheet1 created. Please try submitting again.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Extract form data
    const name = data.name || '';
    const number = data.mobile || data.number || '';
    const email = data.email || '';
    
    // Validate required fields
    if (!name || !number) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Name and Phone are required fields.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add headers if sheet is empty (first row)
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 3).setValues([['Name', 'Phone', 'Email']]);
    }
    
    // Append the new row with form data
    const timestamp = new Date();
    sheet.appendRow([
      name,
      number,
      email,
      timestamp // Optional: Add timestamp in column D if you want
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data successfully saved to Google Sheet.',
      timestamp: timestamp.toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error processing request: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function - You can run this manually to test the script
 * Make sure to replace the test data with your own
 */
function testDoPost() {
  const testData = {
    name: 'Test User',
    mobile: '+919876543210',
    email: 'test@example.com'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
