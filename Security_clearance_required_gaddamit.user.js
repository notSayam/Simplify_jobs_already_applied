// ==UserScript==
// @name         CLEARANCE CHECKER
// @namespace    https://simplify.jobs/
// @version      1.3
// @description  Automatically clicks 'Already Applied?' button if clearance text or specific phrases are found on simplify.jobs, and displays a popup notification.
// @author       Sayam
// @match        https://simplify.jobs/jobs*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of keywords to search for
    const keywords = ['US', 'Top', 'Secret', 'Clearance', 'Required'];

    // List of phrases to search for
    const phrases = ['US Citizenship Required'];

    // Function to check if text contains all keywords (case-insensitive)
    function containsAllKeywords(text, keywords) {
        const lowerText = text.toLowerCase();
        return keywords.every(word => lowerText.includes(word.toLowerCase()));
    }

    // Function to check if text contains any of the phrases (case-insensitive)
    function containsAnyPhrase(text, phrases) {
        const lowerText = text.toLowerCase();
        return phrases.some(phrase => lowerText.includes(phrase.toLowerCase()));
    }

    // Function to search for the clearance text or phrases and click the button
    function searchAndClick() {
        console.log('Starting the searchAndClick() function...');

        // Flag to indicate if the clearance text or phrase was found
        let clearanceTextFound = false;

        // Get all elements that might contain the clearance text or phrases
        const elements = document.querySelectorAll('p, div, span');
        console.log(`Found ${elements.length} elements to check.`);

        // Check each element for the clearance text or phrases
        for (let el of elements) {
            const text = el.textContent.trim();

            if (containsAllKeywords(text, keywords) || containsAnyPhrase(text, phrases)) {
                console.log(`Found matching text: "${text}"`);
                clearanceTextFound = true;
                break;
            }
        }

        // If the clearance text or phrase was found, proceed to click the button
        if (clearanceTextFound) {
            console.log('Matching text found. Searching for the "Already Applied?" button...');

            // Find all buttons on the page
            const buttons = document.querySelectorAll('button');
            console.log(`Found ${buttons.length} buttons on the page.`);

            // Click the button with the exact text 'Already Applied?'
            let buttonClicked = false;
            for (let button of buttons) {
                const buttonText = button.textContent.trim();
                console.log(`Checking button with text: "${buttonText}"`);
                if (buttonText === 'Already Applied?') {
                    button.click();
                    console.log("Clicked the 'Already Applied?' button.");
                    buttonClicked = true;

                    // Create a div element for the popup
                    const popup = document.createElement('div');
                    popup.textContent = 'Already applied clicked';

                    // Style the popup
                    popup.style.position = 'fixed';
                    popup.style.top = '50%';
                    popup.style.left = '50%';
                    popup.style.transform = 'translate(-50%, -50%)';
                    popup.style.backgroundColor = 'red';
                    popup.style.color = 'white';
                    popup.style.padding = '20px';
                    popup.style.fontSize = '24px';
                    popup.style.fontWeight = 'bold';
                    popup.style.textAlign = 'center';
                    popup.style.border = '2px solid #ccc';
                    popup.style.borderRadius = '10px';
                    popup.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
                    popup.style.zIndex = '9999'; // Ensure it's on top

                    // Append the popup to the body
                    document.body.appendChild(popup);

                    // Remove the popup after 1 second
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 2000); // 1000 milliseconds = 1 second

                    break;
                }
            }

            if (!buttonClicked) {
                console.log("Button 'Already Applied?' not found.");
            }
        } else {
            console.log("No matching text found on the page.");
        }
    }

    // Initial execution after a delay to ensure the content is loaded
    setTimeout(searchAndClick, 2000); // Adjust the delay as needed

    // Function to monitor DOM changes
    function observeDOMChanges() {
        console.log('Setting up MutationObserver to monitor DOM changes...');

        // Select the element that contains the dynamically loaded content
        const targetNode = document.body; // Use the appropriate selector

        if (!targetNode) {
            console.log('Target node for MutationObserver not found.');
            return;
        }

        // Options for the observer (which mutations to observe)
        const config = {
            childList: true,
            subtree: true
        };

        // Callback function when mutations are observed
        const callback = function(mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('Detected DOM changes. Re-running searchAndClick().');
                    searchAndClick();
                    break; // We can break after handling one mutation to avoid multiple calls
                }
            }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }

    // Call the function to set up the MutationObserver
    observeDOMChanges();

})();
