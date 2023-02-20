//Add ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer

// Add iNeuron logo
document.querySelector(".logo").src = "./assets/ineuron-logo.png";


//Change price to $10/month
let parent = document.querySelector(".app_price");
let span = parent.firstElementChild;
span.innerHTML = "$10";

//another method
document.querySelector(".app_price > span").innerHTML = "$10";


//Add linkdin font awesome icon
let socialmedia = document.querySelector(".footer_social");
let newIcon = document.createElement("div");
newIcon.classList.add("footer_social_ico");
newIcon.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;

socialmedia.appendChild(newIcon);


