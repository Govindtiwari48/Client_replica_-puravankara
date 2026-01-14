# Google Sheets Integration - Debugging Guide

## Common Issues and Solutions

### Issue: Data not appearing in Google Sheet

### Step 1: Verify Google Apps Script Deployment

1. **Open your Google Sheet**
2. **Go to Extensions > Apps Script**
3. **Verify the script code** - Make sure the entire code from `google-apps-script.js` is pasted
4. **Check for errors**:
   - Click the "Run" button (play icon) and select `testDoPost` function
   - Check the "Execution log" at the bottom for any errors
   - Fix any errors before proceeding

5. **Deploy the script**:
   - Click "Deploy" > "New deployment" (or "Manage deployments" if one exists)
   - Click the edit icon (pencil) next to your deployment
   - Select type: **"Web app"**
   - Set Execute as: **"Me"**
   - Set Who has access: **"Anyone"** (IMPORTANT!)
   - Click **"Deploy"**
   - **Copy the new Web App URL**

6. **Update the URL in your JavaScript**:
   - Open `assets/js/custom.js`
   - Update line 9 with your new Web App URL
   - Save the file

### Step 2: Verify Google Sheet Setup

1. **Check Sheet Name**:
   - Your sheet must be named exactly **"Sheet1"** (case-sensitive)
   - If it's named differently, either rename it to "Sheet1" OR update the script:
     - In `google-apps-script.js`, line 30, change `'Sheet1'` to your sheet name

2. **Check Column Headers**:
   - Column A: Name
   - Column B: Phone
   - Column C: Email
   - Column D: Where You Find Us
   - If headers don't exist, the script will add them automatically

### Step 3: Test the Script Manually

1. In Google Apps Script editor, click "Run" and select `testDoPost`
2. Check the "Execution log" - it should show a success message
3. Check your Google Sheet - you should see a test row added

### Step 4: Check Browser Console

1. Open your website
2. Open browser Developer Tools (F12)
3. Go to the "Console" tab
4. Submit a form
5. Look for these messages:
   - "Submitting to Google Sheets: {data}"
   - "Response status: 200" (success)
   - Any error messages

### Step 5: Verify Permissions

1. When you first deploy, Google will ask for permissions
2. Click "Review Permissions"
3. Select your Google account
4. Click "Advanced" > "Go to [Your Project Name] (unsafe)"
5. Click "Allow"

### Step 6: Common Errors

**Error: "Script function not found"**
- Solution: Make sure the function is named `doPost` (case-sensitive)

**Error: "Access denied"**
- Solution: Make sure "Who has access" is set to "Anyone" in deployment settings

**Error: "Sheet not found"**
- Solution: Check that your sheet is named "Sheet1" or update the script

**Error: "No data received"**
- Solution: Check that the JavaScript is sending data correctly (check browser console)

### Step 7: Test with a Simple Request

You can test the script directly by opening this URL in your browser (replace with your URL):
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

This should show an error (because it's a GET request, not POST), but it confirms the script is deployed.

### Step 8: Enable Logging

The script now includes better error logging. Check:
1. In Google Apps Script, go to "Executions" (clock icon)
2. View recent executions
3. Check for any error messages

## Quick Checklist

- [ ] Script code is pasted correctly in Apps Script
- [ ] Script is deployed as "Web app"
- [ ] "Who has access" is set to "Anyone"
- [ ] Web App URL is updated in `custom.js` (line 9)
- [ ] Sheet is named "Sheet1"
- [ ] Permissions are granted
- [ ] Browser console shows submission attempts
- [ ] No errors in Apps Script execution log

## Still Not Working?

1. **Check the exact error** in browser console
2. **Check Apps Script execution log** for errors
3. **Try the test function** (`testDoPost`) in Apps Script
4. **Verify the URL** is correct and accessible
5. **Check network tab** in browser DevTools to see if the request is being sent
