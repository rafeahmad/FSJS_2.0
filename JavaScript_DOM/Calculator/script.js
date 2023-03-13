let input = document.getElementById("screen");
let button = document.querySelectorAll("button");
let error_message = document.getElementById("error-message")

let string = "";
let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            try {
                string = eval(string);
                input.value = string;
              } catch(error) {
            
                error_message.innerHTML = "Oops! Check your expression";
                error_message.style.display = "block";
            
              }
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
            error_message.style.display = "none";
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

        
    })
})






//   string = eval(string);
//   input.value = string;