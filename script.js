let table = document.getElementById('navigation');
let button = document.getElementById('hide');
let main = document.querySelector('main');
let header = document.querySelector('header');
let divBox = document.getElementById('nav-box');
let newNav = document.createElement('NewNav')
newNav.innerHTML = `<h2>Table of Contents</h2>
<ol id="table-of-contents">
    <li><a href="#HTML1">HTML</a> 
        <ol>
            <li><a href="#html-elements">Elements</a></li>
            <li><a href="#html-structure">Structure</a></li>
            <li><a href="#html-tables">Tables</a></li>
            <li><a href="#html-semantic">HTML Semantic</a></li>
            <li><a href="#html-markdown">Markdown</a></li>
        </ol>
    </li>
    <li>
        <a href="#CSS1">CSS</a> 
        <ol>
            <li><a href="#selectors">Selectors and Visual Rules</a></li>
        </ol>
    </li>
    <li><a href="#JAVASCRIPT1">JavaScript</a>
        <ol>
            <li><a href="#objects">Objects</a></li>
        </ol>
    </li>
</ol>
<button id="hide" class="button" hidden="true">Hide</button>
<button id="show" class="button">Show on Side</button>`;
let oldNav = document.createElement('oldNav');
oldNav.id = "navigation";
oldNav.innerHTML = `<nav id="navigation"><h2>Table of Contents</h2>
<ol id="table-of-contents">
    <li><a href="#HTML1">HTML</a> 
        <ol>
            <li><a href="#html-elements">Elements</a></li>
            <li><a href="#html-structure">Structure</a></li>
            <li><a href="#html-tables">Tables</a></li>
            <li><a href="#html-semantic">HTML Semantic</a></li>
            <li><a href="#html-markdown">Markdown</a></li>
        </ol>
    </li>
    <li>
        <a href="#CSS1">CSS</a> 
        <ol>
            <li><a href="#selectors">Selectors and Visual Rules</a></li>
        </ol>
    </li>
    <li><a href="#JAVASCRIPT1">JavaScript</a>
        <ol>
            <li><a href="#objects">Objects</a></li>
        </ol>
    </li>
</ol>
<button id="hide" class="button">Hide</button>
<button id="show" class="button" hidden="true">Show on Side</button>`






let hideTable = () => {
divBox.removeChild(table);
main.style.padding = "25px 100px"
header.style.padding = "25px 100px"
divBox.appendChild(newNav);
divBox.style.width = '300px';
divBox.style.margin = '0 auto';
divBox.style.backgroundColor = 'rgba(0, 0, 0, .90)';
divBox.style.border = '1px solid yellowgreen';
document.getElementById('show').style.width = '40%';
document.getElementById('show').style.margin = '0 30%';
};

button.onclick = hideTable;

let button2 = document.getElementById('show');

let showTable = () => {
divBox.appendChild(oldNav);
divBox.removeChild(newNav);
}

button2.onclick = showTable;