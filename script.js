let navBox = document.getElementById('navigation');
let button = document.getElementById('hide');
let main = document.querySelector('main');
let header = document.querySelector('header');
let divBox = document.getElementById('nav-box');
let button2 = document.getElementById('show');

let hideTable = () => {
button.hidden = true;
button2.removeAttribute("hidden")
main.style.padding = "25px 100px";
header.style.padding = "25px 100px";
navBox.style.width = "300px";
navBox.style.height = "";
navBox.style.position = "static";
navBox.style.left = "";
navBox.style.top = "";
};

let showTable = () => {
button.removeAttribute("hidden");
button2.hidden = true;
main.style.padding = "25px 95px 25px 210px";
header.style.padding = "25px 95px 25px 210px";
navBox.style.width = "200px";
navBox.style.height = "98%";
navBox.style.position = "fixed";
navBox.style.left = "10px";
navBox.style.top = "10px";
};

button.onclick = hideTable;
button2.onclick = showTable;