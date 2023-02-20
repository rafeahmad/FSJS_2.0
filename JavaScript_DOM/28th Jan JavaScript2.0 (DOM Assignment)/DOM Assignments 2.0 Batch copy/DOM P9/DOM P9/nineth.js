// Change h1 color and button color on mouseover

// Change h1 color
document.querySelector("h1").style.color =  "#dc143c";


// Change button color on mouseover
let hover = document.querySelector(".add-to-cart");
hover.addEventListener("mouseover", () => {
    hover.style.backgroundColor = "#da123a";
})
hover.addEventListener("mouseout", () => {
    hover.style.backgroundColor = "#3c8067";
})

