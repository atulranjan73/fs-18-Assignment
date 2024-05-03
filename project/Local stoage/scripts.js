// Get references to the textarea and output paragraph
const textarea = document.querySelector('textarea');
const output = document.getElementById('results');

// Load previously saved content from localStorage if available
const savedContent = localStorage.getItem('autosave_content');
if (savedContent) {
    textarea.value = savedContent;
}

// Function to update the output paragraph with the textarea content
function updateOutput() {
    output.textContent = textarea.value;
}

// Add event listener to the textarea for input event
textarea.addEventListener('input', function() {
    // Update the output paragraph with the current content
    updateOutput();
    // Save the content to localStorage
    localStorage.setItem('autosave_content', textarea.value);
});

// Initial update of output paragraph
updateOutput();
