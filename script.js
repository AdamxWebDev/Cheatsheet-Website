let table = document.getElementById('navigation');
let button = document.getElementById('hide');
let main = document.querySelector('main');
let header = document.querySelector('header');
let divBox = document.getElementById('nav-box');
let table2 = document.getElementById('fixed-nav-box');
let button2 = document.getElementById('show');

let hideTable = () => {
table.hidden = true;
table2.removeAttribute("hidden")
main.style.padding = "25px 100px";
header.style.padding = "25px 100px";
};

button.addEventListener("click", hideTable);




let showTable = () => {
table.removeAttribute("hidden");
table2.hidden = true;
main.style.padding = "25px 95px 25px 210px";
header.style.padding = "25px 95px 25px 210px";
};

button2.onclick = showTable;