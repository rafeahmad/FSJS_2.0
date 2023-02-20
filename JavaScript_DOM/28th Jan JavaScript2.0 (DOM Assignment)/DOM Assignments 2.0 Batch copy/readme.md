# Full Stack JavaScript 2.0

# DOM Assignment 1

### Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove footer social icons.

**Output -**

![DOM_P_1](https://user-images.githubusercontent.com/119880897/220012534-f3cacf6d-899f-4657-81c6-39a9a91bb2d9.jpg)

### *Solution -*

### Task 1

**Change nav item contact to projects**

```
const changeItem = document.querySelector("ul");
changeItem.lastElementChild.innerHTML = "Projects";
```

**Add "Hire me" after Pojects**

```
const newItem = document.createElement("a");
newItem.innerText = "Hire me";

const li = document.createElement("li");
li.appendChild(newItem);

const list = document.querySelector("header nav ul");
list.appendChild(li);
```

**Remove footer social icons**

```
let icons = document.querySelector("footer ul");
icons.style.visibility = "hidden";
```

### Task 2

**Change placeholder text to "Search My Project" in search input**

```
document.querySelector(".search-field input").placeholder = "Search My Project";
```


### Task 3

**Change span text and display footer social icons**

```
let span = document.querySelectorAll(".hero-left-section p span");
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd.";
```

**Display footer social icons**

```
document.querySelector("footer ul").style.visibility = "visible";
```


### Task 4

**Change image**

```
let image = document.querySelector("img"); 
image.src = "./hiteshsir.jpg";
```


### Task 5 

**Add "Support Me" button after chat with me button**

```
let btn = document.createElement("button");
btn.innerHTML = "Support Me";
let position = document.querySelector(".hero-right-section-btns");
position.appendChild(btn);
```

# DOM Assignment 2

### Change all h3 background color and change contact navigation menu to "Projects" and add h3 with new name "Skills" and also add new paragraph

**Output -**

![DOM_P_2](https://user-images.githubusercontent.com/119880897/220013815-c34e23b1-6b5f-4bbb-8429-6f2fd1ce0dff.jpg)

### *Solution -*

### Task 1

**Change all h3 background color**

```
let h3 = document.querySelectorAll("h3");

for(let i = 0; i < h3.length; i++) {
    h3[i].style.backgroundColor = "#dadaf8";
}
```

**Change contact navigation menu to projects**

```
let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";
```

### Task 2

**Add one more h3 "Skills" and also add new paragraph**

```
let element = document.querySelector(".accordian-wrapper"); 
let div = document.createElement("div"); 
div.classList.add("accordian"); 
element.appendChild(div);
```

**add new h3**

```
let newItem = document.createElement('h3');
newItem.innerHTML = "Skills";
newItem.style.backgroundColor = "#dadaf8";

div.appendChild(newItem);
```

**add paragraph**

```
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
```

# DOM Assignment 3

### Change placeholder values

**Output -**

![DOM_P_3](https://user-images.githubusercontent.com/119880897/220014604-59a784c3-e52f-4f92-b590-3f7a2702821c.jpg)

### *Solution -*
```
document.querySelector(".enterName").placeholder = "FSJS2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";
```

```
document.querySelector(".userName").placeholder = "FSJS2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";
```

# DOM Assignment 4

### Change character names and background color and text color at the bottom of the cards

![DOM_P_4](https://user-images.githubusercontent.com/119880897/220015467-0dfe0a17-e399-4ab6-84ab-aee12bbed7a4.jpg)

### *Solution -*

**Change character names**

```
document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";
document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";
```


**Change background color at the bottom of the cards**

```
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d"; 
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";
```

**Change text color to white at the bottom of the cards**

```
document.querySelectorAll(".one-third").forEach((e) => {
    e.style.color = "#ffffff";
})
```

# DOM Assignment 5

### Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card

**Output -**

![DOM_P_5](https://user-images.githubusercontent.com/119880897/220016829-e289d212-0f66-4de0-8a86-7b1bb24d836a.jpg)

### *Solution -*

**Add Pro subscription button**

```
let btn = document.createElement("a");
btn.innerText = "Pro Subscription";
btn.classList.add("btn");

let position = document.querySelector(".btn");
position.parentElement.appendChild(btn);
```

**Add new recipe chinese (7)**

```
let parent = document.querySelectorAll(".tags-container div")[0];
let newItem = document.createElement("a");
newItem.innerText = "Chinese (7)";

parent.appendChild(newItem);
```

**Change h5 and p tags color**

```
document.querySelectorAll(".recipe-name").forEach((e) => {
    e.style.color = "#8A2BE2";
})

document.querySelectorAll(".recipe-disp").forEach((e) => {
    e.style.color = "#8A2BE2";
})
```

**Add 6th card**

```
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
```

**My name**

```
let myName = document.querySelector(".page-footer p a");
myName.textContent = "Rafe Ahmad";
```

# DOM Assignment 6

### Add ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer

**Add iNeuron logo**

**Output -**

![DOM_P_6 1](https://user-images.githubusercontent.com/119880897/220017906-f941fffc-5b9f-4427-8029-4a77616e9116.jpg)

### *Solution -*

```
document.querySelector(".logo").src = "./assets/ineuron-logo.png";\
```


**Change price to $10/month and add linkdin font awesome icon**

**Output -**

![DOM_P_6 2](https://user-images.githubusercontent.com/119880897/220017956-e26d270a-0628-4796-b50c-f32897820bd7.jpg)

### *Solution -*

```
let parent = document.querySelector(".app_price");
let span = parent.firstElementChild;
span.innerHTML = "$10";

//another method
document.querySelector(".app_price > span").innerHTML = "$10";
```

```
let socialmedia = document.querySelector(".footer_social");
let newIcon = document.createElement("div");
newIcon.classList.add("footer_social_ico");
newIcon.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;

socialmedia.appendChild(newIcon);
```

# DOM Assignment 7

### Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

**Output -**

![DOM_P_7](https://user-images.githubusercontent.com/119880897/220027660-3f797985-35ca-4a57-a9f8-9ab40a9361a1.jpg)

### *Solution -*

```
let languages = document.querySelectorAll(".main__languages a");
for(let i = 0; i < languages.length; i++){
    if(languages[i].innerHTML.includes(2.0)){
        languages[i].style.display = "none";
    }
}


const submitBtn = document.getElementsByClassName('main__form-btn')[0];
submitBtn.disabled = false;
const inputField = document.getElementsByClassName('main__form-input')[0];
inputField.disabled = false;
let namesValue;
const language = document.querySelector(".main__languages")
const names = localStorage.getItem('names');
if (names) {
    namesValue = JSON.parse(names);

} else {
    namesValue = [];
}
submitBtn.addEventListener('click', () => {
    const inputValue = inputField.value;
    namesValue.push(inputValue)
    localStorage.setItem('names', JSON.stringify(namesValue))
})


// function to add text in left card
function addText() {
    const aTag = language.getElementsByTagName('a')[0];
    namesValue.forEach(text => {
        const aTagNew = aTag.cloneNode(true);
        aTagNew.innerText = text;
        language.appendChild(aTagNew)

    })
}
addText();
```


# DOM Assignment 8

### Remove navbar add horizontal line and p tag then add red color border to the div and add vertical scrollbar then add background color to white and add responsive navbar toggle button

**Output -**

![DOM_P_8 1](https://user-images.githubusercontent.com/119880897/220029657-1d6936c0-a0ec-4b1f-9daf-a38146de9acd.jpg)

### *Solution -*

**Remove navbar**

```
document.querySelector(".navbar-nav").innerHTML = "";
```

**Add border and vertical scrollbar**

```
const aside = document.getElementsByTagName("aside")[0];
aside.style.border = "4px solid red";
aside.style.overflowY = "scroll";
```

**Add horizontal line**

```
let hr = document.createElement("hr");
hr.classList.add("hr-line");
hr.style.overflow = "auto";
aside.appendChild(hr);
```

**Add heading**

```
let heading = document.createElement("h2");
heading.textContent = "This is new heading";
heading.className = "new-head";
aside.appendChild(heading);
```

**Add paragraph**

```
let para = document.createElement("p");
para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem nisi.";
para.className = "new-p";
aside.appendChild(para);
```

**Remove background**

```
document.body.style.background = "none";
```

**Add responsive navbar toggle button**

```
let navbartoggle = document.querySelector(".navbar-toggler"); 
navbartoggle.addEventListener("click", function(){ 
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse"); 
})
```

# DOM Assignment 9

### Change h1 color and button color on mouseover

### *Solution -*

**Change h1 color**

```
document.querySelector("h1").style.color =  "#dc143c";
```

**Change button color on mouseover**

```
let hover = document.querySelector(".add-to-cart");
hover.addEventListener("mouseover", () => {
    hover.style.backgroundColor = "#da123a";
})
hover.addEventListener("mouseout", () => {
    hover.style.backgroundColor = "#3c8067";
})
```

**Output -**

https://user-images.githubusercontent.com/119880897/220033361-e4976177-9fad-46b3-9238-35ffea547d9e.mp4





