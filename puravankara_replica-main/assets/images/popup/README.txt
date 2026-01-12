BLACK FRIDAY POPUP IMAGE SETUP
================================

INSTRUCTIONS:
1. Save your Black Friday promotional image in this folder as "black-friday-popup.jpg"
2. Recommended image specifications:
   - Format: JPG, PNG, or WebP
   - Max width: 600px for best performance
   - Max height: 800px
   - Aspect ratio: Portrait or square works best
   - File size: Keep under 200KB for fast loading

CURRENT STATUS:
- If the image file doesn't exist, the popup will show a text-based fallback
- The fallback content is automatically generated based on your promotion details
- The popup will show 3 seconds after page load (for testing) or after enquiry forms are closed

CUSTOMIZATION:
- To change the popup content, edit the fallback section in index.html
- To modify popup behavior, check the JavaScript in assets/js/custom.js
- To style the popup, modify the CSS in assets/css/style.css

TESTING:
- Open index.html in a browser
- The popup should appear automatically after 3 seconds
- Or fill out and submit an enquiry form to see it appear after form submission
- Use browser developer tools console to see debug messages

DISABLE POPUP:
- To temporarily disable, add this to browser console: sessionStorage.setItem('blackFridayPopupClosed', 'true')
- To re-enable, clear browser storage or use: sessionStorage.removeItem('blackFridayPopupClosed')