const words = ['_Student', '_Developer', '_Learner'];
const textElement = document.getElementById("typing-text");
let index = 0;
let charIndex = 0;
let isFirstChar = true;

function typeEffect() {
    const word = words[index];
    if (charIndex <= word.length) {
        let typedText = '';
        if (isFirstChar) {
            typedText += '\t'; // Add a tab space before the word if it's the first character
            isFirstChar = false;
        }
        typedText += word.substring(0, charIndex); // Display characters up to current index
        textElement.textContent = typedText;
        charIndex++;
        setTimeout(typeEffect, 50); // Adjust typing speed here (milliseconds)
    } else {
        isFirstChar = true; // Reset isFirstChar for the next word
        setTimeout(clearText, 500); // Adjust delay before clearing text here (milliseconds)
    }
}

function clearText() {
    if (charIndex >= 0) {
        textElement.textContent = ''; // Clear the text
        charIndex--;
        setTimeout(clearText, 50); // Adjust clearing speed here (milliseconds)
    } else {
        index = (index + 1) % words.length; // Move to the next word
        setTimeout(typeEffect, 200); // Adjust delay before typing next word here (milliseconds)
    }
}

typeEffect();
