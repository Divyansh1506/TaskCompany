// navbar.js
window.addEventListener('DOMContentLoaded', (event) => {
    const navbarContainer = document.getElementById('navbar-container');
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        navbarContainer.innerHTML = xhr.responseText;
      }
    };
  
    xhr.open('GET', 'nav.html', true);
    xhr.send();
  });
  


// footer.js
window.addEventListener('DOMContentLoaded', (event) => {
    const footerContainer = document.getElementById('footer-container');
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        footerContainer.innerHTML = xhr.responseText;
      }
    };
  
    xhr.open('GET', 'footer.html', true);
    xhr.send();
  });
  