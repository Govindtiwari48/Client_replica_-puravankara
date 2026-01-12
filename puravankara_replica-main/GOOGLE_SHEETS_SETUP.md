# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for your enquiry form.

## Step 1: Prepare Your Google Sheet

1. Open or create a Google Sheet
2. Make sure you have a sheet named **"Sheet1"**
3. Ensure the first row has these column headers (in this order):
   - **Column A**: Name
   - **Column B**: Number
   - **Column C**: Email

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Open the file `google-apps-script.js` from this project
4. Copy the entire contents of that file
5. Paste it into the Google Apps Script editor
6. Click **Save** (Ctrl+S or Cmd+S)
7. Give your project a name (e.g., "Form Submission Handler")

## Step 3: Deploy as Web App

1. In the Google Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Form Submission Handler" (or any description you prefer)
   - **Execute as**: **Me** (your email address)
   - **Who has access**: **Anyone** (this is required for the form to work)
5. Click **Deploy**
6. You may be asked to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web App URL** that appears after deployment
   - It will look like: `https://script.google.com/macros/s/AKfycby.../exec`

## Step 4: Configure Your Website

1. Open the file: `assets/js/custom.js`
2. Find this line near the top:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = ''; // <-- PASTE YOUR GOOGLE APPS SCRIPT URL HERE
   ```
3. Paste your Web App URL between the quotes:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

## Step 5: Test the Integration

1. Open your website
2. Fill out the enquiry form with:
   - Name
   - Phone Number
   - Email (optional)
3. Click **"Express your interest"** or **"Enquire Now"**
4. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

### Data is not appearing in Google Sheet

1. **Check the Web App URL**: Make sure it's correctly pasted in `custom.js`
2. **Check browser console**: Open Developer Tools (F12) and check the Console tab for any errors
3. **Verify sheet name**: Make sure your sheet is named exactly "Sheet1" (case-sensitive)
4. **Check permissions**: Ensure the Web App is deployed with "Anyone" access
5. **Test the script**: In Google Apps Script, you can run the `testDoPost()` function to test

### Script deployment issues

- Make sure you've authorized the script when prompted
- Try redeploying with a new version if issues persist
- Check that "Execute as" is set to "Me"

### CORS errors

- The code uses `no-cors` mode, which means you won't see response data, but the data will still be saved
- This is normal behavior for Google Apps Script Web Apps

## How It Works

1. When a user submits the form, the JavaScript code:
   - Validates the form data
   - Sends the data (name, number, email) to your Google Apps Script
   - The Google Apps Script receives the data and appends it to your Google Sheet
   - The form continues with its normal submission flow (WhatsApp, redirect, etc.)

## Security Notes

- The Web App URL is public, but only you can modify the Google Sheet
- The script only accepts POST requests with valid JSON data
- Invalid or missing data will be rejected with an error message

## Support

If you encounter any issues:
1. Check the browser console for JavaScript errors
2. Check the Google Apps Script execution log (View → Execution log)
3. Verify all steps were completed correctly
