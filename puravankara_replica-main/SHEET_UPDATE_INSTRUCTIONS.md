# Update Your Existing Google Sheet

## Your Current Sheet Structure

You currently have these columns:
- Column A: **Name**
- Column B: **Phone**
- Column C: **Email**
- Column D: **Time**
- Column E: **Status**
- Column F: **Where You Find Us**

## What You Need to Add

Add these **2 new columns** after your existing columns:

- Column G: **Planning Timeline** (NEW)
- Column H: **Budget** (NEW)

## Step-by-Step Instructions

### 1. Add the New Column Headers

1. Open your Google Sheet
2. In **Row 1**, add these headers:
   - **Column G:** Type `Planning Timeline`
   - **Column H:** Type `Budget`

Your final header row should look like this:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Name | Phone | Email | Time | Status | Where You Find Us | **Planning Timeline** | **Budget** |

### 2. Update Your Apps Script

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete the old code
4. Copy the entire code from `google-apps-script.js` file
5. Paste it into Apps Script editor
6. Click **Save** (💾)
7. Click **Deploy** → **Manage deployments**
8. Click the pencil icon (✏️) to edit
9. Change version to **New version**
10. Click **Deploy**
11. **No need to change the URL** - it stays the same!

### 3. Test

1. Submit a test form on your website
2. Check your Google Sheet
3. You should see data in all 8 columns now!

---

## Final Column Structure

| Column | Header | Description |
|--------|--------|-------------|
| A | Name | User's name |
| B | Phone | 10-digit phone number |
| C | Email | User's email (optional) |
| D | Time | Automatic timestamp |
| E | Status | Empty by default |
| F | Where You Find Us | Facebook, Google, Instagram, Other |
| G | Planning Timeline | Immediately, 2-6 Months, 6+ Months, Just exploring |
| H | Budget | Below 3 Cr., 3-4 Cr., 4-5 Cr., 6 Cr.+ |

---

## Important Notes

✅ Your existing data will **NOT** be affected  
✅ The script will automatically add headers if they're missing  
✅ New form submissions will populate all 8 columns  
✅ Old submissions will have empty values for Planning Timeline and Budget (which is expected)

---

That's it! Your sheet is now ready to capture all form fields including the new Planning Timeline and Budget options.
