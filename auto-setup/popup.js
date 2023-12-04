document.getElementById('addBookmark').addEventListener('click', function() {
  chrome.bookmarks.create({ title: document.title, url: window.location.href });
});
