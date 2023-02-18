// Select parent element by Targeting id their child

// let elm = document.getElementById("intro");
// let prt = elm.parentElement;

//    prt.innerHTML = "Hello";

//   console.log(prt);

// Note: before running this code you have to put id inside the one <li> tag !!





// Select child element by Trageting id their parent
// let elm = document.getElementById("intro");
// let elm2 = elm.firstElementChild;

//    elm2.innerHTML = "Hello";

//   console.log(elm2);

// Note: you can change last child like this by using .lastElementChild





// Change all list item by targeting parent id

function changeList(){

let parent = document.getElementById("intro");
let elm2 = parent.children;
   
  for(let i of elm2){
    i.innerHTML = "Item changed";
    console.log(elm2);
  }
}
   

  // you can target siblings of child in list item

  // .previousElementSibling;
  // .nextElementSibling;






//Create and append Element
// let add = document.getElementById("p1");

// let add2 = document.createElement("h1");
//  add2.textContent = "Hello, this is a h1 tag";  


//  // Another method of add content in your h1 tag
//     // let text = document.createTextNode("Hello, this is a h1 tag");
//     //    add2.appendchild(text);

//      add.appendChild(add2);







//insert before an element inside the parent
let list1 = document.getElementById("list");         //parent

let item = document.createElement("li");
 item.textContent = "new list";


 let pos = list1.firstElementChild.nextElementSibling.nextElementSibling;

     list1.insertBefore(item, pos);





  // Add element in body 
// let parent = document.body;             //to select body

// let elm = document.createElement("h2");
//    elm.textContent = "This is a new h2 element by targeting body";

// let pos = document.getElementById("list");

//   parent.insertBefore(elm, pos);






//Remove Child element 
// let parent = document.getElementById("list");
// let elm = parent.firstElementChild.nextElementSibling;       //remove 2nd item of li

//     parent.removeChild(elm);  


  // document.body.removeChild(parent);        //remove all ul items







// Make Clone 

// let add = document.getElementById("list");

//  let add2 = add.cloneNode(true);

//  add2.id = "new-menu";       //create new id

//     console.log(add2);
     
//     document.body.appendChild(add2);






//Replace items

// let parent = document.getElementById("list");

// let item = document.createElement("li");
//     item.textContent = "item replaced";

//  let replace = parent.firstElementChild.nextElementSibling;

//   parent.replaceChild(item, replace);








//Insert Adjacent HTML

// let elm = document.getElementById("main");

// let html = "<h1>New h1</h1>"

//     elm.insertAdjacentHTML("beforebegin", html);









//Change & Add Attribute

// let btn = document.getElementById("btn");

//     btn.setAttribute("class", "form1");       //Add attribute
   
//   // btn.removeAttribute("value");           //Remove attribute


 
    



//  let btn = document.getElementById("btn");

//  let val = btn.getAttribute("value");

//    //let val = btn.hasAttribute("value");

//     console.log(val); 







//Change Inline style in JavaScript

// 1st Method- Apply multiple css properties 

// let btn = document.getElementById("btn-2");
//   btn.style.cssText = "background-color: blue; color: white;";





//2nd Method- Apply multiple css properties 
// let btn = document.getElementById("btn-2");

//    btn.setAttribute('style', 'background-color: red; color: white;');






//3rd Method - Apply css properties one by one
// let btn = document.getElementById("btn-2");

//  btn.style.background = "red";




//if you put inline css already in your element and add properties with csstext function then you assign += operator so that inline css also be include
//if you don't use += operator then csstext function remove your inline css








//GetComputedStyle
// To see that Css properties applied or not

// let btn = document.getElementById("btn-2");

// let css = getComputedStyle(btn);
     
//        console.log(css.color);






//Change Css classes in JavaScript 
// let box = document.getElementById("box");

//   console.log(box.className);                      //to see classname
   
//  box.className += " dim2";   //add class 


   



//classList function
// let box = document.getElementById("box");

//  console.log(box.classList);

//     for(let css of box.classList){
//           console.log(css);
//     }





//add, remove or replace class
// let box = document.getElementById("box");

//    box.classList.add("dim");               // to add class
//    box.classList.remove("color");         // to remove class

//    // box.classList.replace("color", "dim");      //to replace class






//find class (true or false)
// let box = document.getElementById("box");

// let css = box.classList.contains('color');

//     console.log(css);          //output true





//Note:
//if you want to apply or remove class then use toggle function










//Find width and height by javaScript
//  Border include in offsetwidth function
//  Border not include in client function

// let box = document.getElementById("box");

//   let width = box.offsetWidth;
//   let height = box.offsetHeight;

//       console.log(width);
//       console.log(height);



