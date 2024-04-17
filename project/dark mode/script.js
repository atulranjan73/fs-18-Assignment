function toggleMode(mode) {
    const body = document.body;
  
    if (mode === 'dark') {
      body.style.backgroundColor = '#121212'; // dark mode background
      document.getElementById('sun').style.display = 'none'; // hide sun icon
      document.getElementById('moon').style.display = 'inline'; // show moon icon
    } else {
      body.style.backgroundColor = '#f0f0f0'; // light mode background
      document.getElementById('sun').style.display = 'inline'; // show sun icon
      document.getElementById('moon').style.display = 'none'; // hide moon icon
    }
  }
  