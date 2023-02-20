//Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.


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
