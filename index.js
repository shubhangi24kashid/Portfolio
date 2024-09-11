const words = ['_Student', '_Developer', '_Learner'];
const textElement = document.getElementById("typing-text");
let index = 0;
let charIndex = 0;
let isDeleting = false; // Track if deleting

function typeEffect() {
    const currentWord = words[index];
    const delay = isDeleting ? 50 : 100; // Different speed for typing and deleting

    if (!isDeleting && charIndex <= currentWord.length) {
        // Typing characters
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex++;
        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1000); // Delay before deleting
        }
    } else if (isDeleting && charIndex >= 0) {
        // Deleting characters
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false; // Reset to typing mode
            index = (index + 1) % words.length; // Go to next word
            charIndex = 0; // Reset character index
        }
    }

    setTimeout(typeEffect, delay); // Recursive call with adjusted delay
}

// Start the typing effect
typeEffect();

function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}
