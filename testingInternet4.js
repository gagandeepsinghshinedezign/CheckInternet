function checkInternet() {
  let elem = document.createElement('div');

  if (navigator.onLine) {
    elem.className = 'connection-establish';
    elem.innerHTML = '<p>Thanks, Connection ready!</p>';
    document.body.appendChild(elem);

    // Remove the element after 3 seconds
    setTimeout(() => {
      elem.remove();
    }, 3000);
  } else {
    elem.className = 'connection-lost';
    elem.innerHTML = `
      <div class="lost-msg">
        <button id="close-btn">X</button>
        <h2>Connection Error</h2>
        <p>Your connection has been lost. Please check your network connection.</p>
      </div>
    `;
    document.body.appendChild(elem);

    // Add click event listener to the button
    let closeButton = document.getElementById('close-btn');
    closeButton.onclick = () => {
      elem.remove();
    };
  }
}

// Check the connection status when the page loads
window.addEventListener('load', () => {
  checkInternet(); // Check the current connection status
});

// Event listeners for online and offline events
window.addEventListener('online', () => {
  console.log("Back online");
  checkInternet();
});

window.addEventListener('offline', () => {
  console.log("You are offline");
  checkInternet();
});
