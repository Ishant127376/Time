document.getElementById('openClock').addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("main.html") });
});

