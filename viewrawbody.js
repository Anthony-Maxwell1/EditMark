// To use this, add javascript: onto the beginning and paste into url bar or console.
pre = document.createElement("pre");
pre.innerText = document.getElementsByTagName('html')[0].innerHTML;
document.body.innerHTML = "";
document.body.appendChild(pre)
