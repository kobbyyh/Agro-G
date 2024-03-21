 // Function to toggle dark mode
 function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Store the dark mode preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Event listener for dark mode toggle button
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  
  // Check local storage for dark mode preference on page load
  document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  });