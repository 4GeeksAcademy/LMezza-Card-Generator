/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let symbols = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "1",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let color = ["black", "red"];

  newCard();
  function newCard() {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    let ramdomColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("top-card").innerHTML = symbol;
    document.getElementById("top-card").style.color = ramdomColor;
    document.getElementById("center-body").innerHTML = number;
    document.getElementById("footer-card").innerHTML = symbol;
    document.getElementById("footer-card").style.color = ramdomColor;
  }
  document.getElementById("boton").onclick = function() {
    newCard();
  };
};
