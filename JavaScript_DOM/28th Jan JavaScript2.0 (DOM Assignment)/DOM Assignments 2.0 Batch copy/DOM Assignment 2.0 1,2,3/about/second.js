// Task 1
// change all h3 background color and change contact navigation menu to "Projects"

// Change all h3 background color
let h3 = document.querySelectorAll("h3");

for(let i = 0; i < h3.length; i++) {
    h3[i].style.backgroundColor = "#dadaf8";
}

// Change contact navigation menu to projects
let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";


// Task 2
// Add one more h3 "Skills" and also add new paragraph

let element = document.querySelector(".accordian-wrapper"); 
let div = document.createElement("div"); 
div.classList.add("accordian"); 
element.appendChild(div);

//add new h3 
let newItem = document.createElement('h3');
newItem.innerHTML = "Skills";
newItem.style.backgroundColor = "#dadaf8";

div.appendChild(newItem);

//add paragraph
let paragraph = document.createElement("p");
paragraph.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

div.appendChild(paragraph);

let lastaccordian = document.querySelectorAll(".accordian:last-child h3"); 
lastaccordian.forEach((element) => { element.addEventListener("click", () =>
 { let para = element.nextElementSibling; 
    if (para.style.display === "block") { 
        para.style.display = "none"; 
    } 
    else { 
        para.style.display = "block"; 
    } 
}); 
});

newItem.appendChild(lastaccordian);