"use strict";

var initHandler = {};
var ids = [
    "usernameInput",
    "passwordInput",
    "password-empty-text",
    "Sign-In-Button"
];
var onLoads = {
    "Sign-In-Button":((event) => {
        var passLength = initHandler["passwordInput"].value.length;
        var emptyText = initHandler["password-empty-text"]
        if (passLength < 1 && !isElementVisible(emptyText)) {
            toggleElementVisibility(emptyText);
        } else if (passLength > 0 && isElementVisible(emptyText)) {
            toggleElementVisibility(emptyText);
        }
    }),
}

function initializeInitHandler() {
    for (var i = 0; i < ids.length; i++) {
        console.log(`Initializing initHandler[${ids[i]}]`);
        initHandler[ids[i]] = document.getElementById(ids[i]);
        initializeOnClick(ids[i]);
    }
}

function isElementVisible(element) {
    return element.style.visibility !== 'hidden';
}

function toggleElementVisibility(element) {
    if (isElementVisible(element)) {
        element.style.visibility = 'hidden';
        // element.style.height = '0px';
    } else {
        element.style.visibility = 'visible';
        // element.style.height = '100%';
    }
}

function initializeOnClick(elementID) {
    console.log(`Initializing ${elementID}.onClick()`);
    initHandler[elementID].onclick = onLoads[elementID];
}

