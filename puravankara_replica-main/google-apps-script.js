/**
 * Google Apps Script - Form Submission Handler
 * 
 * UPDATED: Now includes Planning Timeline and Budget fields
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
 * - Column G: Planning Timeline (NEW - add this column)
 * - Column H: Budget (NEW - add this column)
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
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Name', 
        'Phone', 
        'Email', 
        'Time', 
        'Status', 
        'Where You Find Us', 
        'Planning Timeline', 
        'Budget'
      ]]);
    }
    
    // Extract form data
    const name = data.name || '';
    let number = data.mobile || data.number || '';
    const email = data.email || '';
    const whereYouFindUs = data.where_you_find_us || '';
    const planningTimeline = data.planning_timeline || '';
    const budget = data.budget || '';
    
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
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Name', 
        'Phone', 
        'Email', 
        'Time', 
        'Status', 
        'Where You Find Us', 
        'Planning Timeline', 
        'Budget'
      ]]);
    }
    
    // Check if new columns need to be added (for existing sheets)
    const lastColumn = sheet.getLastColumn();
    if (lastColumn < 8) {
      // Add missing headers if they don't exist
      const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
      const headerMap = {
        'Name': 0,
        'Phone': 1,
        'Email': 2,
        'Time': 3,
        'Status': 4,
        'Where You Find Us': 5,
        'Planning Timeline': 6,
        'Budget': 7
      };
      
      // Add missing columns
      if (lastColumn < 6) {
        sheet.getRange(1, 6).setValue('Where You Find Us');
      }
      if (lastColumn < 7) {
        sheet.getRange(1, 7).setValue('Planning Timeline');
      }
      if (lastColumn < 8) {
        sheet.getRange(1, 8).setValue('Budget');
      }
    }
    
    // Format timestamp
    const timestamp = new Date();
    const formattedTime = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');
    
    // Append the new row with form data in correct column order
    // Column A: Name, B: Phone, C: Email, D: Time, E: Status, F: Where You Find Us, G: Planning Timeline, H: Budget
    sheet.appendRow([
      name,
      number,
      email,
      formattedTime,
      '', // Status column - empty by default
      whereYouFindUs,
      planningTimeline,
      budget
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
        where_you_find_us: whereYouFindUs,
        planning_timeline: planningTimeline,
        budget: budget
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
    mobile: '9876543210',
    email: 'test@example.com',
    where_you_find_us: 'Google',
    planning_timeline: '2 - 6 Months',
    budget: '3 - 4 Cr.'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
