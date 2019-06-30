// Initialise clipboard.js for email element
const emailLink = document.getElementById('email-link');
const clipboard = new ClipboardJS(emailLink);

// Popup hide timeout holder
var hidePopupTimeout;

// onclick to be used by activating 'copy email' element
function emailOnClick() {
    clearTimeout(hidePopupTimeout);

    var copiedPopup = document.getElementById('copied-popup');
    copiedPopup.classList.add("show");

    hidePopupTimeout = setTimeout(function() {
        copiedPopup.classList.remove("show")
    }, 1500);
}
