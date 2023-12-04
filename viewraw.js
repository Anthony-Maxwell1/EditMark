// To use this, add javascript: on the front and paste into url bar or console.
pre = document.createElement("pre");
pre.innerText = document.getElementsByTagName("html")[0].innerHTML;
document.body.innerHTML = "";
document.body.appendChild(pre);
