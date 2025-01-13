const textArea = document.getElementById('textArea');
const darkModeToggle = document.getElementById('darkModeToggle');
const toggleCaseButton = document.getElementById('toggleCaseButton');
const capitalizeButton = document.getElementById('capitalizeButton');
const copyButton = document.getElementById('copyButton');
const removeExtraSpacesButton = document.getElementById('removeExtraSpacesButton');
const clearTextButton = document.getElementById('clearTextButton');
const increaseFontButton = document.getElementById('increaseFontButton');
const decreaseFontButton = document.getElementById('decreaseFontButton');
const resetButton = document.getElementById('resetButton');
const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');

let fontSize = 16; // Default font size
let isBold = false; // Track bold state
let isItalic = false; // Track italic state
let isUpperCase = false; // Track case state

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

toggleCaseButton.addEventListener('click', function() {
    if (isUpperCase) {
        textArea.value = textArea.value.toLowerCase();
        let text = document.getElementById("toggleCaseButton").innerText= "Lower Case";
    } else {
        textArea.value = textArea.value.toUpperCase();
        let text = document.getElementById("toggleCaseButton").innerText= "Upper Case";

    }
    isUpperCase = !isUpperCase;
});


capitalizeButton.addEventListener('click', function() {
    textArea.value = textArea.value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

copyButton.addEventListener('click', function() {
    textArea.select();
    document.execCommand('copy');
});

removeExtraSpacesButton.addEventListener('click', function() {
    textArea.value = textArea.value.replace(/\s+/g, ' ').trim();
});

clearTextButton.addEventListener('click', function() {
    textArea.value = '';
});

increaseFontButton.addEventListener('click', function() {
    fontSize += 2; // Increase by 2px
    textArea.style.fontSize = fontSize + 'px';
});

decreaseFontButton.addEventListener('click', function() {
    fontSize = Math.max(8, fontSize - 2); // Decrease by 2px, but not below 8px
    textArea.style.fontSize = fontSize + 'px';
});

resetButton.addEventListener('click', function() {
    textArea.value = '';
    fontSize = 16; // Reset to default font size
    textArea.style.fontSize = fontSize + 'px';
    document.body.classList.remove('dark-mode');
    isBold = false;
    isItalic = false;
    isUpperCase = false;
    textArea.style.fontWeight = 'normal';
    textArea.style.fontStyle = 'normal';
});

boldButton.addEventListener('click', function() {
    isBold = !isBold;
    textArea.style.fontWeight = isBold ? 'bold' : 'normal';
});

italicButton.addEventListener('click', function() {
    isItalic = !isItalic;
    textArea.style.fontStyle = isItalic ? 'italic' : 'normal';
});