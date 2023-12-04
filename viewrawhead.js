// To run this, add javascript: at the beginning and paste into the url bar, or in console.
pre = document.createElement("pre");
pre.innerText = document.getElementsByTagName('head')[0].innerHTML;
document.body.innerHTML = "";
document.body.appendChild(pre);
