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
 * - Column D: Time (automatically added)
 * - Column E: Status (optional, can be empty)
 * - Column F: Where You Find Us
 */

function doPost(e) {
  try {
    // Parse the incoming JSON data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'No data received'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Get or create Sheet1
    let sheet = ss.getSheetByName('Sheet1');
    
    // If Sheet1 doesn't exist, create it
    if (!sheet) {
      sheet = ss.insertSheet('Sheet1');
      // Add headers matching your sheet structure
      sheet.getRange(1, 1, 1, 6).setValues([['Name', 'Phone', 'Email', 'Time', 'Status', 'Where You Find Us']]);
    }
    
    // Extract form data
    const name = data.name || '';
    let number = data.mobile || data.number || '';
    const email = data.email || '';
    const whereYouFindUs = data.where_you_find_us || '';
    
    // Clean phone number - remove all non-digit characters
    number = number.replace(/\D/g, '');
    
    // Validate required fields
    if (!name || !number) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Name and Phone are required fields.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate phone number is exactly 10 digits
    if (number.length !== 10) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Phone number must be exactly 10 digits.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add headers if sheet is empty (first row)
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([['Name', 'Phone', 'Email', 'Time', 'Status', 'Where You Find Us']]);
    }
    
    // Format timestamp
    const timestamp = new Date();
    const formattedTime = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');
    
    // Append the new row with form data in correct column order
    // Column A: Name, B: Phone, C: Email, D: Time, E: Status (empty), F: Where You Find Us
    sheet.appendRow([
      name,
      number,
      email,
      formattedTime,
      '', // Status column - empty by default
      whereYouFindUs
    ]);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data successfully saved to Google Sheet.',
      timestamp: timestamp.toISOString(),
      data: {
        name: name,
        phone: number,
        email: email,
        where_you_find_us: whereYouFindUs
      }
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    Logger.log('Error in doPost: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error processing request: ' + error.toString(),
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle OPTIONS request for CORS preflight
 */
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - You can run this manually to test the script
 * Make sure to replace the test data with your own
 */
function testDoPost() {
  const testData = {
    name: 'Test User',
    mobile: '+919876543210',
    email: 'test@example.com',
    where_you_find_us: 'Google ads'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
