let darkModeEnabled = false;

function toggleMode() {
  const body = document.body;
  const toggleButton = document.getElementById('toggleButton');

  if (darkModeEnabled) {
    body.style.backgroundColor = '#f0f0f0'; // light mode background
    toggleButton.textContent = 'Toggle Dark Mode';
  } else {
    body.style.backgroundColor = '#121212'; // dark mode background
    toggleButton.textContent = 'Toggle Light Mode';
  }

  darkModeEnabled = !darkModeEnabled;
}
