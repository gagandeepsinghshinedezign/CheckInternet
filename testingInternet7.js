function checkInternet() {
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

