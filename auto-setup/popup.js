document.getElementById('addUnlock').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "Unlock Page", url: "javascript:document.body.contentEditable = true; document.designMode = true;", parentId: results[0].id });
  })
});

document.getElementById('addLock').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "Lock Page", url: "javascript:document.body.contentEditable = false; document.designMode = false;", parentId: results[0].id });
  })
});

document.getElementById('addClear').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "Clear Page", url: "javascript:document.body.innerHTML = '';", parentId: results[0].id });
  })
});

document.getElementById('addViewHead').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "View Head HTML", url: 'javascript:pre = document.createElement("pre"); pre.innerText = document.getElementsByTagName("head")[0].innerHTML; document.body.innerHTML = ""; document.body.appendChild(pre)', parentId: results[0].id });
  })
});

document.getElementById('addViewBody').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "View Body HTML", url: 'javascript:pre = document.createElement("pre"); pre.innerText = document.getElementsByTagName("body")[0].innerHTML; document.body.innerHTML = ""; document.body.appendChild(pre)', parentId: results[0].id });
  })
});

document.getElementById('addView').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "View Full HTML", url: 'javascript:pre = document.createElement("pre"); pre.innerText = document.getElementsByTagName("html")[0].innerHTML; document.body.innerHTML = ""; document.body.appendChild(pre)', parentId: results[0].id });
  })
});

document.getElementById('addEdit').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "Edit Raw HTML", url: "javascript:document.body.contentEditable = true; document.designMode = true;", parentId: results[0].id });
  })
});

document.getElementById('addSave').addEventListener('click', function() {
  chrome.bookmarks.search({ title: 'Bookmarks bar' }).then(function(results) {
    chrome.bookmarks.create({ title: "Save Raw HTML", url: 'javascript:document.getElementsByTagName("html")[0].innerHTML = document.getElementsByTagName("pre")[0].innerText', parentId: results[0].id });
  })
});
