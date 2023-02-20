// Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card

// Add Pro subscription button
let btn = document.createElement("a");
btn.innerText = "Pro Subscription";
btn.classList.add("btn");

let position = document.querySelector(".btn");
position.parentElement.appendChild(btn);


// Add new recipe chinese (7)

let parent = document.querySelectorAll(".tags-container div")[0];
let newItem = document.createElement("a");
newItem.innerText = "Chinese (7)";

parent.appendChild(newItem);


// Change h5 and p tags color
document.querySelectorAll(".recipe-name").forEach((e) => {
    e.style.color = "#8A2BE2";
})

document.querySelectorAll(".recipe-disp").forEach((e) => {
    e.style.color = "#8A2BE2";
})


// Add 6th card
let recipe = document.querySelector(".recipe-gallery");
let newCard = document.createElement("div");
newCard.classList.add("card");
recipe.appendChild(newCard);

let card = document.querySelector(".card:last-child");

let selectcard = document.querySelector(".card:last-child"); 
let image = document.createElement("img"); 
image.src = "./img/recipe-5.jpeg"; 
image.classList.add("recipe-img"); 
selectcard.appendChild(image);

let heading = document.createElement("h5");
heading.textContent = "Ice-Cream";
heading.classList.add("recipe-name");
card.appendChild(heading);

let para = document.createElement("p");
para.textContent = "Prep : 15min | Cook : 30min";
para.classList.add("recipe-disp");
card.appendChild(para);


