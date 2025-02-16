# How to Install Tampermonkey and Add the Custom Script

## Step 1: Install Tampermonkey Extension
Tampermonkey is a popular userscript manager that allows you to run custom scripts on websites.

### For Different Browsers:
- **Google Chrome**: [Tampermonkey on Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Mozilla Firefox**: [Tampermonkey on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Microsoft Edge**: [Tampermonkey on Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Safari**: [Tampermonkey for Safari](https://apps.apple.com/app/tampermonkey/id1482490089)

1. Click the link corresponding to your browser.
2. Install the extension by clicking **Add to [Your Browser]**.
3. Follow the instructions to enable the extension.

---

## Step 2: Add the Custom Userscript

### Method 1: Manually Adding the Script
1. Click on the **Tampermonkey** extension icon in your browser toolbar.
2. Select **Create a new script**.
3. Delete the default script content.
4. Copy and paste the scripts you need. 
5. Click **File > Save** (or press `Ctrl + S` / `Cmd + S`).
6. Make sure the script is **enabled**.

---

### Method 2: Importing the Script via URL
Alternatively, you can upload the `.user.js` file to a GitHub repository and provide a **raw** link to your script.

1. Upload your script (`simplify_jobs_remover.user.js`) to your GitHub repository.
2. Copy the **raw** file URL (e.g., `https://raw.githubusercontent.com/yourusername/repository/main/simplify_jobs_remover.user.js`).
3. Click on the Tampermonkey extension icon and select **Create a new script**.
4. Click **File > Import from URL**, paste the link, and save the script.

---

## Step 3: Refresh Simplify Jobs Website
After adding the script:
1. Open or refresh [Simplify Jobs](https://simplify.jobs/) in your browser.
2. The "Already Applied" buttons should now be removed automatically.

---

### 🎉 Enjoy!
Now, you can browse job postings on Simplify Jobs without seeing the unnecessary "Already Applied" buttons!
