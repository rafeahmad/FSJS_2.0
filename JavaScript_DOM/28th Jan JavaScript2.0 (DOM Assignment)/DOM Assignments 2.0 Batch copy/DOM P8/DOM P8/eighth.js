// Remove navbar add horizontal line and p tag then add red color border to the div and add vertical scrollbar then add background color to white and add responsive navbar toggle button

// Remove navbar
document.querySelector(".navbar-nav").innerHTML = "";

// Add border and vertical scrollbar
const aside = document.getElementsByTagName("aside")[0];
aside.style.border = "4px solid red";
aside.style.overflowY = "scroll";

// Add horizontal line 
let hr = document.createElement("hr");
hr.classList.add("hr-line");
hr.style.overflow = "auto";
aside.appendChild(hr);

// Add heading
let heading = document.createElement("h2");
heading.textContent = "This is new heading";
heading.className = "new-head";
aside.appendChild(heading);

// Add paragraph
let para = document.createElement("p");
para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem nisi.";
para.className = "new-p";
aside.appendChild(para);

// Remove background
document.body.style.background = "none";

// Add responsive navbar toggle button
let navbartoggle = document.querySelector(".navbar-toggler"); 
navbartoggle.addEventListener("click", function(){ 
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse"); 
})