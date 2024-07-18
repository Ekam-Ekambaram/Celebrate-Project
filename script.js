// Get references to the elements
const textElement = document.querySelector('.text');
const fontSelect = document.querySelector('#font');
const sizeInput = document.querySelector('#size');
const colorPicker = document.querySelector('#color');
const addTextButton = document.querySelector('#addText');
const newTextInput = document.querySelector('#newText');
const undoButton = document.querySelector('#undo');
const redoButton = document.querySelector('#redo');

// Initialize history arrays
let history = [];
let redoHistory = [];

// Add event listener for text click
textElement.addEventListener('click', () => {
    // Show the font size change, font family, and color options
    fontSelect.style.display = 'block';
    sizeInput.style.display = 'block';
    colorPicker.style.display = 'block';
    newTextInput.style.display = 'block';
    addTextButton.style.display = 'block';
});

// Add event listener for add text button click
addTextButton.addEventListener('click', () => {
    // Get the new text from the input
    const newText = newTextInput.value;

    // Add the current text to the history
    history.push(textElement.textContent);

    // Update the text element with the new text
    textElement.textContent = newText;

    // Clear the new text input field
    newTextInput.value = '';

    // Update the redo history
    redoHistory = [];

    // Hide all elements except text, undo, and redo
    fontSelect.style.display = 'none';
    sizeInput.style.display = 'none';
    colorPicker.style.display = 'none';
    newTextInput.style.display = 'none';
    addTextButton.style.display = 'none';
});

// Add event listener for undo button click
undoButton.addEventListener('click', () => {
    if (history.length > 0) {
        // Get the previous text from the history
        const previousText = history.pop();

        // Add the current text to the redo history
        redoHistory.push(textElement.textContent);

        // Update the text element with the previous text
        textElement.textContent = previousText;
    }
});

// Add event listener for redo button click
redoButton.addEventListener('click', () => {
    if (redoHistory.length > 0) {
        // Get the next text from the redo history
        const nextText = redoHistory.pop();

        // Add the current text to the history
        history.push(textElement.textContent);

        // Update the text element with the next text
        textElement.textContent = nextText;
    }
});

// Add event listeners for font, size, and color changes
fontSelect.addEventListener('change', () => {
    // Add the current text to the history
    history.push(textElement.textContent);

    // Update the text element font
    textElement.style.fontFamily = fontSelect.value;

    // Update the redo history
    redoHistory = [];
});

sizeInput.addEventListener('change', () => {
    // Add the current text to the history
    history.push(textElement.textContent);

    // Update the text element size
    textElement.style.fontSize = sizeInput.value + 'px';

    // Update the redo history
    redoHistory = [];
});

colorPicker.addEventListener('change', () => {
    // Add the current text to the history
    history.push(textElement.textContent);

    // Update the text element color
    textElement.style.color = colorPicker.value;

    // Update the redo history
    redoHistory = [];
});