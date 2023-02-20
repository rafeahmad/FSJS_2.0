// Change character names and background color and text color at the bottom of the cards

//Change character names
document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";

document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";


//Change background color at the bottom of the cards
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d"; 

document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";

document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";


//Change text color to white at the bottom of the cards
document.querySelectorAll(".one-third").forEach((e) => {
    e.style.color = "#ffffff";
})



