function checkInternet() {
  let elem = document.createElement('div');

  if (navigator.onLine) {
    elem.className = 'connection-establish';
    elem.innerHTML = '<p>Thanks, Connection ready!</p>';
  } else {
    elem.className = 'connection-lost';
    elem.innerHTML = `
      <div class="lost-msg">
        <h2>Connection Error</h2>
        <p>Your connection has been lost. Please check your network connection.</p>
      </div>
    `;
  }

  // Append the element to the document body
  document.body.appendChild(elem);

  // Remove the element after 3 seconds
  setTimeout(() => {
    elem.remove();
  }, 3000);
}

// Event listeners for online and offline events
window.addEventListener('online', () => {
  console.log("Back online");
  checkInternet();
});

window.addEventListener('offline', () => {
  console.log("You are offline");
  checkInternet();
});
