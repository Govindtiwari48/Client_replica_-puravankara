# Google Sheets Integration Setup Guide

## Overview
This guide will help you set up Google Sheets to automatically capture form submissions from your website. The integration includes all form fields: Name, Phone, Email, Where You Find Us, Planning Timeline, and Budget.

---

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Website Form Submissions" or "Lead Data"

---

## Step 2: Set Up Column Headers

In the first row (Row 1) of your Google Sheet, add these column headers in this exact order:

| Column | Header Name |
|--------|-------------|
| A | Name |
| B | Phone |
| C | Email |
| D | Time |
| E | Status |
| F | Where You Find Us |
| G | Planning Timeline |
| H | Budget |

**Important:** The headers must be in this exact order for the script to work correctly.

**Note:** If you already have columns A-F set up, you just need to add columns G and H (Planning Timeline and Budget).

---

## Step 3: Install Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. A new tab will open with the Apps Script editor
3. Delete any existing code in the editor
4. Copy the entire contents of the `google-apps-script.js` file
5. Paste it into the Apps Script editor
6. Click **Save** (💾 icon) or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
7. Name your project (e.g., "Form Submission Handler")

---

## Step 4: Deploy as Web App

1. In the Apps Script editor, click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment settings:
   - **Description:** "Form Submission Handler v2" (or any description)
   - **Execute as:** Select **Me** (your email address)
   - **Who has access:** Select **Anyone**
4. Click **Deploy**
5. You may be prompted to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. **Copy the Web App URL** - This is very important! It will look like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## Step 5: Update Your Website Code

1. Open the file: `assets/js/custom.js`
2. Find the line that says:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/...';
   ```
3. Replace the URL with your new Web App URL from Step 4
4. Save the file

---

## Step 6: Test the Integration

### Option 1: Test via Browser Console
1. Open your website in a browser
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Go to the Console tab
4. Type: `testGoogleSheetsConnection()`
5. Press Enter
6. Check your Google Sheet - you should see a test entry

### Option 2: Test via Form Submission
1. Fill out and submit a form on your website
2. Check your Google Sheet - the data should appear automatically

---

## Form Fields Captured

The following fields are captured from your forms:

| Field | Description | Options |
|-------|-------------|---------|
| **Name** | User's full name | Text input |
| **Phone** | 10-digit phone number | Number input |
| **Email** | User's email address | Email input (optional) |
| **Where You Find Us** | Source of lead | Facebook, Google, Instagram, Other |
| **Planning Timeline** | When user plans to book | Immediately, 2 - 6 Months, 6 + Months, Just exploring |
| **Budget** | User's budget range | Below 3 Cr., 3 - 4 Cr., 4 - 5 Cr., 6 Cr. + |
| **Time** | Submission timestamp | Automatically added |
| **Status** | Status field (for your use) | Empty by default |

---

## Troubleshooting

### Data not appearing in Google Sheet?

1. **Check the Web App URL:**
   - Make sure the URL in `custom.js` matches your deployed Web App URL
   - The URL should end with `/exec`

2. **Check Script Permissions:**
   - Go back to Apps Script editor
   - Click **Deploy** → **Manage deployments**
   - Make sure "Who has access" is set to **Anyone**

3. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for any error messages
   - Common errors:
     - `CORS error` - Check deployment settings
     - `404 Not Found` - URL is incorrect
     - `403 Forbidden` - Permissions issue

4. **Check Column Headers:**
   - Make sure your Google Sheet has the correct headers in Row 1
   - Headers must match exactly: Name, Phone, Email, Where You Find Us, Planning Timeline, Budget, Time, Status

5. **Test the Script:**
   - In Apps Script editor, click **Run** → Select `testDoPost`
   - Check the Execution log for any errors

### Need to Update the Script?

1. Make changes to `google-apps-script.js` file
2. Copy the updated code
3. Paste into Apps Script editor
4. Save the project
5. Click **Deploy** → **Manage deployments**
6. Click the pencil icon (✏️) to edit
7. Change version to **New version**
8. Click **Deploy**
9. No need to update the URL - it stays the same!

---

## Security Notes

- The Web App URL is public, but only authorized users (you) can modify the script
- Form data is sent securely via HTTPS
- Phone numbers are automatically cleaned (only digits are saved)
- Email validation is handled on the frontend

---

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Check the Apps Script execution log (View → Executions)
3. Verify all column headers are correct
4. Ensure the Web App URL is correctly set in `custom.js`

---

## Quick Reference

**Google Sheet Column Order:**
```
A: Name
B: Phone  
C: Email
D: Time
E: Status
F: Where You Find Us
G: Planning Timeline
H: Budget
```

**Form Field Options:**

**Where You Find Us:**
- Facebook
- Google
- Instagram
- Other

**Planning Timeline:**
- Immediately
- 2 - 6 Months
- 6 + Months
- Just exploring

**Budget:**
- Below 3 Cr.
- 3 - 4 Cr.
- 4 - 5 Cr.
- 6 Cr. +

---

**Last Updated:** Based on current form structure with Planning Timeline and Budget fields.
