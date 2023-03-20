import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");


const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const todayDate = (
 <>
  <h1>My name is Rafe Ahmad</h1>
  <p>{`Today date is ${date}`}</p>
  <p>{`Current time is ${time}`}</p>
 </>
)

const main = (
  <>
    <h3> Here is the list of my favourite marvel movies</h3>
    <ul>
      <li>Avengers Endgame</li>
      <li>Iron man</li>
      <li>Thor</li>
      <li>Captain America</li>
      <li>Doctor Strange</li>
      <li>Black Panther</li>
    </ul>
   </>
)
  
const section = (
  <>
   {todayDate} {main} 
  </>
)

ReactDOM.render(
section, root);
