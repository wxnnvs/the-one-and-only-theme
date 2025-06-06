// create a function to type text
function typeText(delay = 100) {
    let element = document.getElementById('typing-animation');
    let index = 0;
    let text = element.textContent; // Get the text content of the element
    element.textContent = ''; // Clear the element before typing
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Call the function with the element and text
typeText();

document.getElementById('typing-animation').addEventListener('click', () => {
    typeText();
});