// Task 1
//Change nav item contact to projects
const changeItem = document.querySelector("ul");
changeItem.lastElementChild.innerHTML = "Projects";

// Add "Hire me" after Pojects
const newItem = document.createElement("a");
newItem.innerText = "Hire me";

const li = document.createElement("li");
li.appendChild(newItem);

const list = document.querySelector("header nav ul");
list.appendChild(li);

// Remove footer social icons
let icons = document.querySelector("footer ul");
icons.style.visibility = "hidden";


// Task 2
// Change placeholder text to "Search My Project" in search input
document.querySelector(".search-field input").placeholder = "Search My Project";


// Task 3
// Change span text and display footer social icons
let span = document.querySelectorAll(".hero-left-section p span");
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd.";

// Display footer social icons
document.querySelector("footer ul").style.visibility = "visible";


// Task 4
// Change image
let image = document.querySelector("img"); 
image.src = "./hiteshsir.jpg";


// Task 5 
// Add "Support Me" button after chat with me button
let btn = document.createElement("button");
btn.innerHTML = "Support Me";

let position = document.querySelector(".hero-right-section-btns");
position.appendChild(btn);