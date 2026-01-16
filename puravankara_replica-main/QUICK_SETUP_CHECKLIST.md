# Quick Setup Checklist

## ✅ Step-by-Step Setup

### 1. Create Google Sheet
- [ ] Go to [Google Sheets](https://sheets.google.com)
- [ ] Create new blank spreadsheet
- [ ] Name it (e.g., "Website Form Submissions")

### 2. Add Column Headers (Row 1)
Copy and paste these headers in Row 1, starting from Column A:

```
Name | Phone | Email | Time | Status | Where You Find Us | Planning Timeline | Budget
```

**Note:** If you already have the first 6 columns, just add the last 2 (Planning Timeline and Budget).

### 3. Install Apps Script
- [ ] Open your Google Sheet
- [ ] Click **Extensions** → **Apps Script**
- [ ] Delete any existing code
- [ ] Open `google-apps-script.js` file from this project
- [ ] Copy ALL the code
- [ ] Paste into Apps Script editor
- [ ] Click **Save** (💾)

### 4. Deploy Web App
- [ ] Click **Deploy** → **New deployment**
- [ ] Click gear icon (⚙️) → Select **Web app**
- [ ] Set **Execute as:** Me
- [ ] Set **Who has access:** Anyone
- [ ] Click **Deploy**
- [ ] Authorize if prompted
- [ ] **COPY THE WEB APP URL** (starts with `https://script.google.com/macros/s/...`)

### 5. Update Website Code
- [ ] Open `assets/js/custom.js`
- [ ] Find line 9: `const GOOGLE_APPS_SCRIPT_URL = '...'`
- [ ] Replace the URL with your new Web App URL
- [ ] Save the file

### 6. Test
- [ ] Open your website
- [ ] Open browser console (F12)
- [ ] Type: `testGoogleSheetsConnection()`
- [ ] Press Enter
- [ ] Check your Google Sheet for test entry

---

## 📋 Google Sheet Template

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| **Name** | **Phone** | **Email** | **Time** | **Status** | **Where You Find Us** | **Planning Timeline** | **Budget** |

---

## 🔗 Files You Need

1. **`google-apps-script.js`** - The script to paste into Google Apps Script
2. **`GOOGLE_SHEETS_SETUP_GUIDE.md`** - Detailed setup instructions
3. **`assets/js/custom.js`** - Your website JavaScript (update the URL here)

---

## 📝 Form Fields Being Captured

✅ Name  
✅ Phone (10 digits)  
✅ Email (optional)  
✅ Where You Find Us (Facebook, Google, Instagram, Other)  
✅ Planning Timeline (Immediately, 2-6 Months, 6+ Months, Just exploring)  
✅ Budget (Below 3 Cr., 3-4 Cr., 4-5 Cr., 6 Cr.+)  
✅ Time (automatic timestamp)  
✅ Status (empty, for your use)

---

## ⚠️ Important Notes

- The Web App URL must end with `/exec`
- Column headers must match exactly
- Phone numbers are automatically cleaned (only digits saved)
- All form submissions are timestamped automatically

---

## 🆘 Need Help?

See `GOOGLE_SHEETS_SETUP_GUIDE.md` for detailed troubleshooting steps.
