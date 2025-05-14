document.addEventListener("DOMContentLoaded", () => {
    const fadeInItems = document.querySelectorAll('.fade-in');
    fadeInItems.forEach(item => {
      item.classList.add('visible');
    });
  
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    document.getElementById('toggle-theme').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
    });
  });
  