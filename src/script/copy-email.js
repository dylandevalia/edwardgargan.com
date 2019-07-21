const ClipboardJS = require('clipboard');

// Initialise clipboard.js for email element
var emailLink = document.getElementById('email-link');
const emailClipboardWrapper = new ClipboardJS(emailLink);

// Popup hide timeout holder
var hidePopupTimeout;

// onclick to be used by activating 'copy email' element
function emailOnClick() {
    clearTimeout(hidePopupTimeout);

    var copiedPopup = document.getElementById('copied-popup');
    
    copiedPopup.classList.remove("dismiss");
    copiedPopup.classList.add("show");

    hidePopupTimeout = setTimeout(function() {
        copiedPopup.classList.remove("show");
        copiedPopup.classList.add("dismiss");
    }, 1400);
}

// Attach listener to email link element
emailLink.addEventListener('click', emailOnClick, false);
