// To use this, add javascript: on the front and paste into url bar or console.
javascript:pre = document.createElement("pre");
pre.innerText = document.getElementsByTagName('html')[0].innerHTML;
document.body.innerHTML = "";
pre.style.backgroundColor = "black";
pre.style.color = "white";
document.body.appendChild(pre);
document.body.contentEditable = true;
