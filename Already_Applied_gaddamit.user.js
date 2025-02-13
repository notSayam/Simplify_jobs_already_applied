// ==UserScript==
// @name         Remove 'Already Applied' Buttons on Simplify Jobs
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Remove buttons with 'Already Applied' from Simplify Jobs website, including dynamically loaded content
// @author       Sayam
// @match        https://simplify.jobs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove 'Already Applied' buttons
    function removeAppliedButtons() {
        document.querySelectorAll('button').forEach(function(button) {
            if (button.textContent.includes('Already Applied') && !button.textContent.includes('Already Applied?')) {
                button.remove();
            }
        });
    }

    // Run the function initially
    removeAppliedButtons();

    // Create a MutationObserver to monitor the DOM for changes
    const observer = new MutationObserver((mutations, observer) => {
        // For each mutation that occurs
        mutations.forEach((mutation) => {
            // If new nodes have been added
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // Run the function to remove buttons
                removeAppliedButtons();
            }
        });
    });

    // Configure and start the observer
    observer.observe(document.body, {
        childList: true, // Look for added/removed child nodes
        subtree: true    // Observe all descendants
    });
})();
